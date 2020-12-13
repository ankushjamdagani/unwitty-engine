import { Vector2D, Commons } from '../core';
import { ENTITY_NODE_TYPES, SHAPES, TRANSFORM_ORIGIN } from '../../constants';

import Camera from './Camera';

// DOC ::  https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
class Renderer {
  constructor({ key, canvas, context, engine }) {
    const screen = {
      width: canvas.width,
      height: canvas.height,
      aspectRatio: canvas.width / canvas.height
    };

    const camera = new Camera({
      position: Vector2D.zero(),
      rotation: 0,
      screen: screen
    });

    this.key = key;

    const canvasMap = new Map();
    canvasMap.set(
      1,
      new Map([
        ['canvas', canvas],
        ['context', context],
        ['lastUpdatedAt', null]
      ])
    );

    this.state = {
      screen,
      canvasMap,
      camera,
      engine
    };
  }

  bindCamera(target) {
    this.state.camera.bindTarget(target);
  }

  getScreenPosition(pos, camera) {
    return {
      x: Commons.roundOff(pos.x - camera.position.x),
      y: Commons.roundOff(pos.y - camera.position.y)
    };
  }

  // Scene Graph method
  // - depth first render
  // - check if in camera viewport (cunning)
  // - raytracing using light
  // - Checks which ones are ideal and don't need updating
  //   i.e. checks if elements are sleeping
  renderTree(root, time) {
    const { width, height } = this.state.screen;

    this.state.canvasMap.forEach((cv) =>
      cv.get('lastUpdatedAt') - Date.now() < 1000
        ? cv.get('context').clearRect(0, 0, width, height)
        : null
    );
    this.state.camera.update();

    this.renderNode(root, time);
  }

  renderNode(element) {
    const { canvasMap, camera, engine } = this.state;
    const { resourceManager } = engine.managers;

    // Track INACTIVE elements and canvas :: set last updated at for elements and canvas
    const canvasObj = canvasMap.get(element.canvasIndex || 1);
    if (!canvasObj) {
      return;
    }
    const context = canvasObj.get('context');
    canvasObj.set('lastUpdatedAt', Date.now());

    switch (element.type) {
      case ENTITY_NODE_TYPES.WORLD:
        break;
      case ENTITY_NODE_TYPES.LIGHT:
        break;
      case ENTITY_NODE_TYPES.TRANSFORM:
        this.applyTransform(context, element, camera);
        break;
      case ENTITY_NODE_TYPES.BODY:
      case ENTITY_NODE_TYPES.PHYSICS_BODY:
      case ENTITY_NODE_TYPES.FLUID_BODY: {
        context.beginPath();
        this.renderBody(element, {
          context,
          camera,
          resourceManager
        });
        context.closePath();

        if (element.debug) {
          context.beginPath();
          this.drawBoundingBox(context, element, camera);
          context.closePath();
        }
        break;
      }
      default: {
        if (element.render) {
          element.render();
        }
      }
    }

    for (const [, val] of element.children) {
      this.renderNode(val);
    }

    switch (element.type) {
      case ENTITY_NODE_TYPES.TRANSFORM:
        context.restore();
        break;
      default: {
        if (element.cleanup) {
          element.cleanup();
        }
      }
    }
  }

  renderBody(element, envProps) {
    const { context, camera, resourceManager } = envProps;
    const {
      image,
      backgroundImage,
      repeat,
      backgroundColor,
      backgroundGradient,
      borderColor,
      borderSize
    } = element.styles;

    const _image = image && resourceManager.get(image);
    _image && this.renderImage(context, element, camera, _image);

    if (!backgroundColor & !borderColor & !borderSize & !_bgImage) {
      return;
    }

    context.fillStyle = backgroundColor || 'transparent';
    context.strokeStyle = borderColor || 'transparent';
    context.lineWidth = borderSize || 0;

    const _bgImage = backgroundImage && resourceManager.get(backgroundImage);

    if (_bgImage) {
      const pattern = context.createPattern(_bgImage, repeat || 'repeat');
      context.fillStyle = pattern;
    } else if (backgroundGradient) {
      console.warn('Gradients are not supported for now');
    }

    if (element.shape === SHAPES.RECTANGLE) {
      this.renderRect(context, element, camera);
    } else if (element.shape === SHAPES.ARC) {
      this.renderCircle(context, element, camera);
    } else if (element.shape === SHAPES.POLYGON) {
      this.renderPolygon(context, element, camera);
    }
  }

  applyTransform(context, element, camera) {
    const {
      rotate,
      transform: [[a, c, e], [b, d, f]],
      boundingBox: { margins },
      position,
      width,
      height,
      origin
    } = element;

    let coords;

    if (Array.isArray(origin)) {
      const { x, y } = this.getScreenPosition(
        { x: origin[0], y: origin[1] },
        camera
      );
      coords = [x, y];
    } else {
      const { x, y } = this.getScreenPosition(position, camera);
      const xMax = x + width + margins[1];
      const xMin = x - margins[3];

      const yMax = y + height + margins[2];
      const yMin = y - margins[0];

      const xMid = xMin + (xMax - xMin) / 2;
      const yMid = yMin + (yMax - yMin) / 2;

      switch (origin) {
        case TRANSFORM_ORIGIN.LEFT_TOP:
          coords = [xMin, yMin];
          break;
        case TRANSFORM_ORIGIN.RIGHT_TOP:
          coords = [xMax, yMin];
          break;
        case TRANSFORM_ORIGIN.RIGHT_BOTTOM:
          coords = [xMax, yMax];
          break;
        case TRANSFORM_ORIGIN.LEFT_BOTTOM:
          coords = [xMin, yMax];
          coords[0] = xMin;
          coords[1] = yMax;
          break;
        case TRANSFORM_ORIGIN.CENTER:
          coords = [xMid, yMid];
          break;
        default:
          coords = [0, 0];
          break;
      }
    }

    context.save();

    context.transform(a, b, c, d, e + coords[0], f + coords[1]);
    rotate && context.rotate((Math.PI * rotate) / 180);
    context.translate(-coords[0], -coords[1]);
  }

  renderImage(context, element, camera, image) {
    const { x, y } = this.getScreenPosition(element.position, camera);
    const { width, height } = element;

    context.drawImage(image, x, y, width, height);
  }

  renderRect(context, element, camera) {
    const { x, y } = this.getScreenPosition(element.position, camera);
    const { width, height } = element;

    context.rect(x, y, width, height);
    context.fill();
    context.stroke();
  }

  renderCircle(context, element, camera) {
    const { x, y } = this.getScreenPosition(element.position, camera);
    const { radius, startAngle, endAngle } = element;

    context.arc(x + radius, y + radius, radius, startAngle, endAngle);
    context.fill();
    context.stroke();
  }

  renderPolygon(context, element, camera) {
    const { x, y } = this.getScreenPosition(element.position, camera);
    const { vertices } = element;

    context.moveTo(x + vertices[0][0], y + vertices[0][1]);

    for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i]; // x, y, type :: moveTo, arc, lineTo, quadraticCurveTo, bezierCurveTo etc.
      context.lineTo(x + vertex[0], y + vertex[1]);
    }

    context.fill();
    context.stroke();
  }

  drawBoundingBox(context, element, camera) {
    const { x, y } = this.getScreenPosition(element.position, camera);
    const { width, height } = element;
    const { margins, shape, color } = element.boundingBox;

    context.strokeStyle = color;
    context.lineWidth = 1;
    context.setLineDash([25, 5, 5, 5, 5, 5, 5, 5]);
    if (shape === SHAPES.ARC) {
      const radius = width / 2 + margins[1] - margins[3];
      context.arc(x + radius, y + radius, radius, 0, Math.PI * 2);
      context.stroke();
    } else {
      context.strokeRect(
        x - margins[3],
        y - margins[0],
        width + (margins[1] + margins[3]),
        height + (margins[0] + margins[2])
      );
    }
  }
}

export default Renderer;

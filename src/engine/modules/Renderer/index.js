import { Vector2D } from "../core";
import { ENTITY_NODE_TYPES, SHAPES } from "../../constants";

import Camera from "./Camera";

// Maybe
// Checks which ones are ideal and don't need updating
// i.e. checks if elements are sleeping
class Renderer {
  init({ state, managers }) {
    this.props = {
      resourceManager: managers.resourceManager,
      screen: state.screen,
      canvas: state.canvas,
    };
    this.camera = new Camera({
      position: Vector2D.zero(),
      rotation: 0,
      screen: state.screen,
    });
  }
  // Scene Graph method
  // - depth first render
  // - check if in camera viewport (cunning)
  // - raytracing using light

  // Brute force method
  render(elements) {
    const {
      canvas: { context },
      screen: { width, height },
    } = this.props;
    const camera = this.camera;

    // Learn when to partial clear canvas. and where.
    context.clearRect(0, 0, width, height);

    camera.update();

    for (const element of elements) {
      switch (element.type) {
        case ENTITY_NODE_TYPES.WORLD:
          break;
        case ENTITY_NODE_TYPES.LIGHT:
          break;
        case ENTITY_NODE_TYPES.TRANSFORM:
          break;
        case ENTITY_NODE_TYPES.BODY:
        case ENTITY_NODE_TYPES.PHYSICS_BODY:
        case ENTITY_NODE_TYPES.FLUID_BODY: {
          context.beginPath();
          this.renderBody(element, {
            context,
            camera,
          });
          context.closePath();
          break;
        }
        default: {
          if (element.render) {
            element.render();
          }
        }
      }
    }
  }

  getScreenPosition(pos, camera) {
    return {
      x: pos.x - camera.position.x,
      y: pos.y - camera.position.y,
    };
  }

  renderBody(element, envProps) {
    const { context, camera } = envProps;
    const {
      image,
      backgroundImage,
      repeat,
      backgroundColor,
      backgroundGradient,
      borderColor,
      borderSize,
    } = element.styles;

    const _image = image && this.props.resourceManager.get(image);
    _image && this.renderImage(context, element, camera, _image);

    if (!backgroundColor & !borderColor & !borderSize & !_bgImage) {
      return;
    }

    context.fillStyle = backgroundColor || "transparent";
    context.strokeStyle = borderColor || "transparent";
    context.lineWidth = borderSize || 0;

    const _bgImage =
      backgroundImage && this.props.resourceManager.get(backgroundImage);

    if (_bgImage) {
      const pattern = context.createPattern(_bgImage, repeat || "repeat");
      context.fillStyle = pattern;
    } else if (backgroundGradient) {
      console.warn("Gradients are not supported for now");
    }

    if (element.shape === SHAPES.RECTANGLE) {
      this.renderRect(context, element, camera);
    } else if (element.shape === SHAPES.ARC) {
      this.renderCircle(context, element, camera);
    } else if (element.shape === SHAPES.POLYGON) {
      this.renderPolygon(context, element, camera);
    }

    if (element.debug) {
      this.drawBoundingBox(context, element, camera);
    }
  }

  renderImage(context, element, camera, image) {
    const { x, y } = this.getScreenPosition(element.position, camera);
    const { width, height } = element;

    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
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

  renderPolygon(context, element, camera) {}

  drawBoundingBox(context, element, camera) {
    const { x, y } = this.getScreenPosition(element.position, camera);
    const { width, height } = element;
    const { margins, shape, color } = element.boundingBox;

    context.strokeStyle = color;
    context.lineWidth = 1;
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

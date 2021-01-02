import { SHAPES, MID_CANVAS_KEY } from '../constants';
import { core } from '../modules';

/**
 * @todo:: access dom manager here
 */
import EntityManager from './EntityManager';
import DomManager from './DomManager';

const { Base, Commons } = core;

// DOC ::  https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

/**
 * @todo::
 * - what would be data structure for holding canvases
 * - Track INACTIVE states
 *   - set lastUpdatedAt for elements :: whether physics should be calculated or not
 *   - set lastUpdatedAt for canvas :: whether canvas needs to be cleared or not
 * - create instance of canvas based on zIndex and canvasId
 *   - maintain order of canvas based on zIndex
 * - Scene Graph method
 *   - depth first render
 *   - check if in camera viewport (cunning)
 *   - raytracing using light
 *   - Checks which ones are ideal and don't need updating
 *      i.e. checks if elements are sleeping
 */
class RenderManager extends Base {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getScreenPosition(pos, camera) {
    return pos
      ? {
          x: Commons.roundOff(pos.x - camera.position.x),
          y: Commons.roundOff(pos.y - camera.position.y)
        }
      : {};
  }

  renderTree(root) {
    const {
      core: { width, height },
      entities,
      canvasMap,
      resources
    } = this.props.getData();

    canvasMap.forEach((cv) => {
      cv.get('isActive') && cv.get('context').clearRect(0, 0, width, height);
    });

    this.renderNode(root, { entities, resources, canvasMap });
  }

  renderNode(elementId, { entities, resources, canvasMap }) {
    const element = entities[elementId];
    const { camera } = entities;

    if (!element) return;

    const canvasObj = canvasMap.get(element.canvasId || MID_CANVAS_KEY);

    if (!canvasObj) {
      DomManager.addCanvas(element.canvasId);
      return;
    }

    const context = canvasObj.get('context');
    const { origin } = element;
    const localCoords = this.getScreenPosition(
      Array.isArray(origin) ? { x: origin[0], y: origin[1] } : element.position,
      camera
    );

    EntityManager.preRender(element, { context, resources, localCoords });

    context.beginPath();
    RenderManager.render(element, { context, resources, localCoords });
    context.closePath();

    element.children.forEach((el) => {
      this.renderNode(el, { entities, resources, canvasMap });
    });

    EntityManager.postRender(element, { context, resources, localCoords });

    if (element.debug) {
      context.beginPath();
      RenderManager.drawBoundingBox(element, { context, localCoords });
      context.closePath();
    }
  }

  static render(element, envProps) {
    const { context, resources } = envProps;
    const {
      image,
      backgroundImage,
      repeat,
      backgroundColor,
      backgroundGradient,
      borderColor,
      borderSize
    } = element.styles || {};

    const _image = image && resources.get(image);
    _image && RenderManager.drawImage(element, envProps, _image);

    const _bgImage = backgroundImage && resources.get(backgroundImage);

    if (!backgroundColor & !borderColor & !borderSize & !_bgImage) {
      return;
    }

    context.fillStyle = backgroundColor || 'transparent';
    context.strokeStyle = borderColor || 'transparent';
    context.lineWidth = borderSize || 0;

    if (_bgImage) {
      const pattern = context.createPattern(_bgImage, repeat || 'repeat');
      context.fillStyle = pattern;
    } else if (backgroundGradient) {
      console.warn('Gradients are not supported for now');
    }

    EntityManager.render(element, envProps);
  }

  static drawImage(element, { context, localCoords: { x, y } }, image) {
    const { width, height } = element;

    context.drawImage(image, x, y, width, height);
  }

  static drawBoundingBox(element, { context, localCoords: { x, y } }) {
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

export default RenderManager;

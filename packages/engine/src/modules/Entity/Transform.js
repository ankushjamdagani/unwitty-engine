import { constants } from '@unwitty/core';
import Node from './_node';

const { TRANSFORM_ORIGIN, ENTITY_NODE_TYPES } = constants;

// DOC :: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
const Transform = {
  ...Node,

  create(props) {
    const {
      origin = TRANSFORM_ORIGIN.CENTER,
      rotate,
      transform = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ]
    } = props;

    const _node = Node.create(props);
    return {
      ..._node,
      type: ENTITY_NODE_TYPES.TRANSFORM,
      origin,
      rotate,
      transform
    };
  },

  // compute position etc. based on assumption that there will be multiple childrens
  onAddChildren(parent, child) {
    return {
      ...parent,
      position: child.position,
      boundingBox: child.boundingBox,
      width: child.width,
      height: child.height
    };
  },

  onRemoveChildren(parent) {
    return {
      ...parent,
      position: undefined,
      boundingBox: undefined,
      width: undefined,
      height: undefined
    };
  },

  preRender(element, { context, localCoords: { x, y } }) {
    const {
      rotate,
      transform: [[a, c, e], [b, d, f]],
      boundingBox: { margins },
      // position,
      width,
      height,
      origin
    } = element;

    let coords;

    if (Array.isArray(origin)) {
      coords = [x, y];
    } else {
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
  },

  postRender(element, { context }) {
    context.restore();
  }
};

export default Transform;

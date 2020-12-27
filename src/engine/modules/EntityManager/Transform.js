import { TRANSFORM_ORIGIN, ENTITY_NODE_TYPES } from '../../constants';

import Node from './_node';

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
  }
};

export default Transform;

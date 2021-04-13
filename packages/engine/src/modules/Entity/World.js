import { constants } from '@unwitty/core';
import Node from './_node';

const { ENTITY_NODE_TYPES } = constants;
/**
 * Candidate environment variables
 * - Gravity
 * - Bounds
 * - Air Density
 * - Temperature
 * - Background
 * - Light
 * - Camera
 * - Transformations
 */
const World = {
  ...Node,

  create(props) {
    const {
      gravity = 0,
      bounds = [
        { x: -Infinity, y: -Infinity },
        { x: Infinity, y: Infinity }
      ]
    } = props;

    const _node = Node.create(props);
    return {
      ..._node,
      type: ENTITY_NODE_TYPES.WORLD,
      gravity,
      bounds
    };
  },

  setGravity(world, gravity) {
    return {
      ...world,
      gravity
    };
  },

  setBounds(world, bounds) {
    return {
      ...world,
      bounds
    };
  }
};

export default World;

import { constants } from '@unwitty/core';

import Node from './_node';

const { ENTITY_NODE_TYPES } = constants;

const Layer = {
  ...Node,

  create(props) {
    const _node = Node.create(props);
    return {
      ..._node,
      type: ENTITY_NODE_TYPES.LAYER
    };
  }
};

export default Layer;

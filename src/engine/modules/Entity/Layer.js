import { ENTITY_NODE_TYPES } from '../../constants';

import Node from './_node';

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

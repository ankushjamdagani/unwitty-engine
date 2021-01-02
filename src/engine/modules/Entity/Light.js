import { ENTITY_NODE_TYPES } from '../../constants';

import Node from './_node';

const Light = {
  ...Node,

  create(props) {
    const _node = Node.create(props);
    return {
      ..._node,
      type: ENTITY_NODE_TYPES.LIGHT
    };
  }
};

export default Light;

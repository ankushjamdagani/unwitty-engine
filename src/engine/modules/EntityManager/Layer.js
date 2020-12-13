import { ENTITY_NODE_TYPES } from '../../constants';

import _node from './_node';

class Layer extends _node {
  constructor(props) {
    super(props);

    this.type = ENTITY_NODE_TYPES.LAYER;
  }
}

export default Layer;

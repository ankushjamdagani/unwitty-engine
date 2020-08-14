import { ENTITY_NODE_TYPES } from "../../constants";

import _node from "./_node";

class Camera extends _node {
  constructor(props = {}) {
    super(props);

    const { position, rotation = 0 } = props;

    this.type = ENTITY_NODE_TYPES.CAMERA;

    this.position = position;
    this.rotation = rotation;
    this.target = null;
  }

  setRotation(angle) {
    this.rotation = angle;
  }

  setPosition(pos) {
    this.position.x = pos.x;
    this.position.y = pos.y;
  }

  bindTarget(target) {
    this.target = target;
  }

  update() {
    if (this.target) {
      this.setPosition(this.target.position);
    }
  }
}

export default Camera;

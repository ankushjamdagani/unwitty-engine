import { ENTITY_NODE_TYPES } from "../../constants";

import _node from "./_node";

class Camera extends _node {
  constructor(props = {}) {
    super(props);

    const { position, rotation = 0, screen } = props;

    this.type = ENTITY_NODE_TYPES.CAMERA;

    this.position = position;
    this.rotation = rotation;
    this.screen = screen;
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

  render() {
    if (this.target) {
      const {
        position: { x, y },
      } = this.target;
      const { width, height } = this.screen;

      this.position.x = x - width / 2;
      this.position.y = y - height / 2;
    }
  }
}

export default Camera;

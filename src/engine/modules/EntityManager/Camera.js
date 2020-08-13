import Node from "./Node";

class Camera extends Node {
  constructor(props) {
    super(props);

    const { position, rotation } = props;

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

/**
 * @todo
 * - Zoom in / Zoom out
 * - Rotation
 * - Camera types [follow all, follow-x, follow-y, etc.]
 */
class Camera {
  constructor(props = {}) {
    const { position, rotation = 0, screen } = props;

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

  update() {
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

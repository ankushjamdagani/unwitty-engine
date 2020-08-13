import _node from "./_node";

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
class World extends _node {
  constructor(props = {}) {
    super(props);
    const {
      gravity = 0,
      bounds = [
        { x: -Infinity, y: -Infinity },
        { x: Infinity, y: Infinity },
      ],
    } = props;
    this.gravity = gravity;
    this.bounds = bounds;
  }

  setGravity() {
    this.gravity = gravity;
  }

  setBounds(bounds) {
    this.bounds = bounds;
  }
}

export default World;

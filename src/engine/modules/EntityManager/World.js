import Node from "./Node";

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
class World extends Node {
  constructor(props) {
    super(props);
    const {
      gravity,
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

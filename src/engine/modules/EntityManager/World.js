import _node from "./_node";
import { ENTITY_NODE_TYPES } from "../../constants";

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

    this.type = ENTITY_NODE_TYPES.WORLD;
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

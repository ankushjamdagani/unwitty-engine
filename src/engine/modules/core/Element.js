import { SHAPES, BODY_TYPE } from "../../constants";

import Vector2D from "../Maths/Vector2D";
import Renderers from "../../Renderer/Renderers";

// Shape
// Bounding Box
// Category Mask
// vertices
// bodyType

// Styles and textures will be applied to all childrens as well
// childrens can have overriden styles as well, inherit unspecified values
class Element {
  constructor({
    name,
    shape = SHAPES.RECTANGLE, // will also be used for drawing bounding boxes and collision detection
    vertices,
    edges,
    parent,
    children = [],

    // check if collision can occer using these
    categoryMask = 0b001,
    collisionMask = 0b111,

    // on collision resolve using this
    bodyType = BODY_TYPE.KINEMATIC,
    mass = 1,
    restitution = 0.2,
    friction = 0,
    position = { x: 0, y: 0 },
    direction = { x: 0, y: 0 },
    velocity = { x: 0, y: 0 },
    acceleration = { x: 0, y: 0 },

    renderProps = {},
    ...restProps
  }) {
    // META
    this.id = Date.now();
    this.name = name;
    this.shape = shape;
    this.vertices = vertices; // maybe if not vertices - find it from shape and restProps
    this.parent = parent;
    this.children = children;

    // PHYSICS
    this.bodyType = bodyType;
    this.mass = mass;
    this.restitution = restitution;
    this.friction = friction;

    this.position = new Vector2D(position.x, position.y);
    this.direction = new Vector2D(direction.x, direction.y);
    this.velocity = new Vector2D(velocity.x, velocity.y);
    this.acceleration = new Vector2D(acceleration.x, acceleration.y);

    this.props = { ...restProps };

    // ----- Evalutate Essentials -------
    // Bounding Box
    // Center of mass
    // Vector Box
    // Label Box
    // Collision Points
  }

  isMoving() {
    return this.velocity.x && this.velocity.y;
  }

  addEventListeners() {}

  addChild() {}
  removeChild() {}

  getTransform() {}
  setTransform() {}

  onCollision() {}

  onInput() {}

  // update self and all childrens
  update() {}

  // render self and all childrens
  render(envProps) {}

  toString() {
    return `Element(${this.id} :: ${this.name} | Shape :: ${this.shape})`;
  }
}

export default Element;

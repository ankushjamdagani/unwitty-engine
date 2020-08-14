import { SHAPES, BODY_TYPE, ENTITY_NODE_TYPES } from "../../constants";

import Vector2D from "../core/Vector2D";

import _node from "./_node";

// import Renderers from "../../Renderer/Renderers";

// Shape
// Bounding Box
// Category Mask
// vertices
// bodyType

// Styles and textures will be applied to all children as well
// children can have overriden styles as well, inherit unspecified values
class Element extends _node {
  constructor(props) {
    super(props);
    const {
      shape = SHAPES.RECTANGLE, // will also be used for drawing bounding boxes and collision detection
      vertices,
      edges,

      // check if collision can occer using these
      categoryMask = 0b001,
      collisionMask = 0b111,

      // on collision resolve using this
      bodyType = BODY_TYPE.KINEMATIC,
      mass = 1, // and density. Drive size from that? maybe??
      restitution = 0.2,
      friction = 0,
      position = { x: 0, y: 0 },
      direction = { x: 0, y: 0 },
      velocity = { x: 0, y: 0 },
      acceleration = { x: 0, y: 0 },
      ...restProps
    } = props;

    // META
    this.type = ENTITY_NODE_TYPES.ELEMENT;
    this.shape = shape;
    this.vertices = vertices; // maybe if not vertices - find it from shape and restProps

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
    // Surface Area
  }

  isMoving() {
    return this.velocity.x && this.velocity.y;
  }

  getTransform() {}
  setTransform() {}

  addEventListeners() {}

  onCollision() {}

  onInput() {}

  // update self and all children
  update() {}

  // render self and all children
  render(envProps) {}

  toString() {
    return `Element(${this.id} :: ${this.name} | Shape :: ${this.shape})`;
  }
}

Element.createFromShape = () => {};

Element.createRectangle = ({ position, width, height, ...rest }) => {
  return new Element({
    shape: SHAPES.RECTANGLE,
    vertices: [
      [position.x, position.y],
      [position.x + width, position.y],
      [position.x, position.y + height],
      [position.x + width, position.y + height],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    position,
    width,
    height,
    ...rest,
  });
};

Element.createCircle = () => {};
Element.createPolygon = () => {};

export default Element;

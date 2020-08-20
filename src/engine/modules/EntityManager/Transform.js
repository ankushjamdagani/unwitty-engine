import { TRANSFORM_ORIGIN, ENTITY_NODE_TYPES } from "../../constants";

import _node from "./_node";

// DOC :: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
class Transform extends _node {
  constructor(props) {
    super(props);

    this.type = ENTITY_NODE_TYPES.TRANSFORM;

    this.origin = props.origin || TRANSFORM_ORIGIN.CENTER;
    this.rotate = props.rotate;
    this.transform = props.transform || [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
  }

  onAddChilren(child) {
    this.position = child.position;
    this.boundingBox = child.boundingBox;
    this.width = child.width;
    this.height = child.height;

    this.parent.onAddChilren(this);
  }
}

export default Transform;

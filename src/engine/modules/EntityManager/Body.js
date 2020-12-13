import { SHAPES, ENTITY_NODE_TYPES } from '../../constants';
import Vector2D from '../core/Vector2D';
import Commons from '../core/Commons';

import _node from './_node';

const defaultState = {
  shape: SHAPES.RECTANGLE,
  position: [0, 0],
  debug: false,
  boundingBox: {
    margins: [0, 0, 0, 0],
    shape: SHAPES.RECTANGLE,
    color: 'red'
  }
};

// Styles and textures will be applied to all children as well
// children can have overriden styles as well, inherit unspecified values
class Body extends _node {
  constructor(props) {
    super(props);

    const {
      shape = defaultState.shape,
      width,
      height,
      radius,
      startAngle,
      endAngle,
      vertices,
      eddges,

      position = defaultState.position,

      styles, // backgroundColor, backgroundImage, backgroundGradient, borderColor, borderSize

      canvasId,
      debug = defaultState.debug,
      // collision box?
      boundingBox = defaultState.boundingBox,

      ...restProps
    } = props;

    this.type = ENTITY_NODE_TYPES.BODY;

    this.shape = shape;
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.vertices = vertices;
    this.eddges = eddges;

    // should I save corners? and edges?
    // users will be giving center pos by default
    this.position = new Vector2D(position[0], position[1]);

    this.styles = styles;

    this.canvasId = canvasId;
    this.debug = debug;
    this.boundingBox = { ...defaultState.boundingBox, ...boundingBox };

    this.restProps = restProps;
  }

  onAddChilren(child) {
    if (!this.position || !child.position) {
      return;
    }

    const {
      position: cPosition,
      boundingBox: { margins: cBoundingBoxMargin },
      width: cWidth,
      height: cHeight
    } = child;
    const {
      position: pPosition,
      boundingBox: { margins: pBoundingBoxMargin },
      width: pWidth,
      height: pHeight
    } = this;

    const xMin = Commons.minimum(
      pPosition.x - pBoundingBoxMargin[3],
      cPosition.x - cBoundingBoxMargin[3]
    );
    const yMin = Commons.minimum(
      pPosition.y - pBoundingBoxMargin[0],
      cPosition.y - cBoundingBoxMargin[0]
    );

    const xMax = Commons.maximum(
      pPosition.x + pWidth + pBoundingBoxMargin[1],
      cPosition.x + cWidth + cBoundingBoxMargin[1]
    );
    const yMax = Commons.maximum(
      pPosition.y + pHeight + pBoundingBoxMargin[2],
      cPosition.y + cHeight + cBoundingBoxMargin[2]
    );

    this.boundingBox.margins = [
      pPosition.y - yMin,
      xMax - (pPosition.x + pWidth),
      yMax - (pPosition.y + pHeight),
      pPosition.x - xMin
    ];

    this.parent.onAddChilren(this);
  }
}

Body.getDebugMessage = (body) => {
  return `Pos :: ${body.position.x}, ${body.position.y}`;
};

Body.createArc = ({
  radius,
  startAngle = 0,
  endAngle = Math.PI * 2,
  position,
  ...restProps
}) => {
  return new Body({
    shape: SHAPES.ARC,
    width: 2 * radius,
    height: 2 * radius,
    startAngle,
    endAngle,
    radius,
    position,
    ...restProps
  });
};

Body.createRectangle = ({ width, height, position, ...restProps }) => {
  return new Body({
    shape: SHAPES.RECTANGLE,
    width,
    height,
    position,
    ...restProps
  });
};

Body.createPolygon = ({ vertices, eddges, position, ...restProps }) => {
  let minX = 0;
  let minY = 0;

  let maxX = 0;
  let maxY = 0;

  vertices.map(([x, y]) => {
    minX = Commons.minimum(x, minX);
    maxX = Commons.maximum(x, maxX);

    minY = Commons.minimum(y, minY);
    maxY = Commons.maximum(y, maxY);
  });
  return new Body({
    shape: SHAPES.POLYGON,
    width: maxX - minX,
    height: maxY - minY,
    position,
    vertices,
    eddges,
    ...restProps
  });
};

export default Body;

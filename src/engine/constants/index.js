// Element Consts
const BODY_TYPE = {
  STATIC: 0,
  KINEMATIC: 1,
  DYNAMIC: 2,
};

const GRADIENT_TYPES = {
  LINEAR: 0,
  RADIAL: 1,
};

const SHAPE_STYLES = {
  NONE: 0,
  NORMAL: 1,
  GRADIENT: 2,
  PATTERN: 3,
};

const SHAPES = {
  TRIANGLE: 0,
  RECTANGLE: 1,
  PENTAGON: 2,
  HEXAGON: 3,
  ARC: 4,
  POLYGON: 5,
};

const GAME_STATES = {
  HOME: 0,
  PLAY: 1,
  PAUSE: 2,
  END: 3,
};

const KEY_CODES = {
  ESC: "escape",
  SPACE: " ",
  LEFT: "arrowleft",
  RIGHT: "arrowright",
  ENTER: "enter",
  M: "m",
};

const RESOURCE_TYPE = {
  IMAGE: 1,
  AUDIO: 2,
};

const ENTITY_NODE_TYPES = {
  WORLD: 0,
  LIGHT: 1,
  BODY: 2,
  PHYSICS_BODY: 3,
  FLUID_BODY: 4,
  TRANSFORM: 5,
};

export {
  BODY_TYPE,
  GRADIENT_TYPES,
  SHAPE_STYLES,
  SHAPES,
  GAME_STATES,
  KEY_CODES,
  RESOURCE_TYPE,
  ENTITY_NODE_TYPES,
};

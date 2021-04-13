const BODY_TYPE = {
  STATIC: 0,
  KINEMATIC: 1,
  DYNAMIC: 2
};

const GRADIENT_TYPES = {
  LINEAR: 0,
  RADIAL: 1
};

const SHAPE_STYLES = {
  NONE: 0,
  NORMAL: 1,
  GRADIENT: 2,
  PATTERN: 3
};

const SHAPES = {
  TRIANGLE: 0,
  RECTANGLE: 1,
  PENTAGON: 2,
  HEXAGON: 3,
  ARC: 4,
  POLYGON: 5
};

const GAME_STATES = {
  HOME: 0,
  PLAY: 1,
  PAUSE: 2,
  END: 3
};

const KEY_CODES = {
  ESC: 'escape',
  SPACE: ' ',
  LEFT: 'arrowleft',
  RIGHT: 'arrowright',
  ENTER: 'enter',
  M: 'm'
};

const RESOURCE_TYPE = {
  IMAGE: 1,
  AUDIO: 2
};

const ENTITY_NODE_TYPES = {
  SCENE: 'scene',
  WORLD: 'world',
  LIGHT: 'light',
  CAMERA: 'camera',
  LAYER: 'layer',
  GRID: 'grid',
  TILE_MAP: 'tile_map',
  BODY: 'body',
  PHYSICS_BODY: 'physics_body',
  FLUID_BODY: 'fluid_body',
  TRANSFORM: 'transform'
};

const TRANSFORM_ORIGIN = {
  CENTER: 0,
  LEFT_TOP: 1,
  RIGHT_TOP: 2,
  RIGHT_BOTTOM: 3,
  LEFT_BOTTOM: 4
};

const MID_CANVAS_KEY = 'base';

export default {
  BODY_TYPE,
  GRADIENT_TYPES,
  SHAPE_STYLES,
  SHAPES,
  GAME_STATES,
  KEY_CODES,
  RESOURCE_TYPE,
  ENTITY_NODE_TYPES,
  TRANSFORM_ORIGIN,
  MID_CANVAS_KEY
};

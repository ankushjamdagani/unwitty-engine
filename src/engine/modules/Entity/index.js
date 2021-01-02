import { ENTITY_NODE_TYPES } from '../../constants';

import Scene from './Scene';
import World from './World';
import Light from './Light';
import Camera from './Camera';
import Transform from './Transform';
import Layer from './Layer';
import Body from './Body';
import PhysicsBody from './PhysicsBody';
import FluidBody from './FluidBody';

const ENTITY_COMPONENT_FROM_TYPE = {
  [ENTITY_NODE_TYPES.SCENE]: Scene,
  [ENTITY_NODE_TYPES.WORLD]: World,
  [ENTITY_NODE_TYPES.LIGHT]: Light,
  [ENTITY_NODE_TYPES.CAMERA]: Camera,
  [ENTITY_NODE_TYPES.TRANSFORM]: Transform,
  [ENTITY_NODE_TYPES.LAYER]: Layer,
  [ENTITY_NODE_TYPES.BODY]: Body,
  [ENTITY_NODE_TYPES.PHYSICS_BODY]: PhysicsBody,
  [ENTITY_NODE_TYPES.FLUID_BODY]: FluidBody
};

const Entity = {
  Scene,
  World,
  Light,
  Camera,
  Transform,
  Layer,
  Body,
  PhysicsBody,
  FluidBody,
  get: (type) => ENTITY_COMPONENT_FROM_TYPE[type]
};

export default Entity;

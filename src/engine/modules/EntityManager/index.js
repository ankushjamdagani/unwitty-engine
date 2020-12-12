import World from './World';
import Light from './Light';
import Transform from './Transform';
import Layer from './Layer';
import Body from './Body';
import PhysicsBody from './PhysicsBody';
import FluidBody from './FluidBody';

class EntityManager {
  constructor() {
    this.parentIndex = new Map();
    this.root = null;
  }

  setRoot(elem) {
    this.root = elem;
  }

  getRoot() {
    return this.root;
  }

  getItemsToRender(node) {
    const elem = node || this.root;
    let items = [];

    items.push(elem);

    if (elem.children && elem.children.size) {
      for (const [, val] of elem.children) {
        items = items.concat(this.getItemsToRender(val));
      }
    }
    return items;
  }

  getEntityById() {}
}

EntityManager.createWorld = (props) => {
  return new World(props);
};

EntityManager.createLight = (props) => {
  return new Light(props);
};

EntityManager.createTransform = (props) => {
  return new Transform(props);
};

EntityManager.createLayer = (props) => {
  return new Layer(props);
};

EntityManager.createBody = (props) => {
  return new Body(props);
};

EntityManager.createPhysicsBody = (props) => {
  return new PhysicsBody(props);
};

EntityManager.createFluidBody = (props) => {
  return new FluidBody(props);
};

EntityManager.World = World;
EntityManager.Light = Light;
EntityManager.Transform = Transform;
EntityManager.Layer = Layer;
EntityManager.Body = Body;
EntityManager.PhysicsBody = PhysicsBody;
EntityManager.FluidBody = FluidBody;

export default EntityManager;

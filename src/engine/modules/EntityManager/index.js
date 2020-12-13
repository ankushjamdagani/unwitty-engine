import World from './World';
import Light from './Light';
import Transform from './Transform';
import Layer from './Layer';
import Body from './Body';
import PhysicsBody from './PhysicsBody';
import FluidBody from './FluidBody';

class EntityManager {
  constructor() {
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
      elem.children.forEach((el) => {
        items = items.concat(this.getItemsToRender(el));
      });
    }
    return items;
  }

  getEntityById() {
    return this;
  }
}

EntityManager.createWorld = (props) => new World(props);

EntityManager.createLight = (props) => new Light(props);

EntityManager.createTransform = (props) => new Transform(props);

EntityManager.createLayer = (props) => new Layer(props);

EntityManager.createBody = (props) => new Body(props);

EntityManager.createPhysicsBody = (props) => new PhysicsBody(props);

EntityManager.createFluidBody = (props) => new FluidBody(props);

EntityManager.World = World;
EntityManager.Light = Light;
EntityManager.Transform = Transform;
EntityManager.Layer = Layer;
EntityManager.Body = Body;
EntityManager.PhysicsBody = PhysicsBody;
EntityManager.FluidBody = FluidBody;

export default EntityManager;

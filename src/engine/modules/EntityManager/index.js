import World from "./World";
import Camera from "./Camera";
import Light from "./Light";
import Transform from "./Transform";
import Layer from "./Layer";
import Element from "./Element";

class EntityManager {
  constructor() {
    this.parentIndex = new Map();
    this.root = null;
  }

  setRoot(elem) {
    this.root = elem;
  }

  *getNextToRender() {
    yield 1;
    yield* 2;
  }

  getEntityById() {}
}

EntityManager.createWorld = (props) => {
  return new World(props);
};

EntityManager.createCamera = (props) => {
  return new Camera(props);
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

EntityManager.createElement = (props) => {
  return new Element(props);
};

export default EntityManager;

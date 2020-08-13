class EntityManager {
  constructor() {
    this.parentIndex = new Map();
    this.root = null;
  }

  setRoot(elem) {
    this.root = elem;
  }

  * getNextToRender() {
    yield 1;
    yield* 2;
  }

  getEntityById() {}
}

export default EntityManager;

class EntityManager {
  parentIndex = new Map();
  root = null;

  setRoot(elem) {
    this.root = elem;
  }

  getNextToRender = function* () {
    yield this.entityGraph[0];
  };

  getEntityById() {}
}

export default EntityManager;

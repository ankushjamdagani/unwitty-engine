const ElementManager = () => {
  this.sceneGraph = [];

  // maybe use generator function
  this.getNextInLine = function* () {
    yield this.sceneGraph[0];
  };
};

export default ElementManager;

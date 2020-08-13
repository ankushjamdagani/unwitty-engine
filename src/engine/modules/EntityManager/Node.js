class Node {
  constructor(props) {
    this.id = Date.now();
    this.entity = entity || null;
    this.parent = parent || null;
    this.childrens = new Map(childrens || []);
  }

  add(entity) {
    this.childrens.set(entity.id, entity);
    entity.addTo(this);
  }

  addTo(parent) {
    this.parent = parent;
  }
}

export default Node;

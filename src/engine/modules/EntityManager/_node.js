import { Commons } from "../core";

class _node {
  constructor({ label, entity, children } = {}) {
    this.id = Commons.uid();
    this.label = label;
    this.type = null;
    this.entity = entity || null;
    this.parent = parent || null;
    this.children = new Map(children || []);
  }

  add(entity) {
    this.children.set(entity.id, entity);
    entity.addTo(this);
  }

  addTo(parent) {
    this.parent = parent;
    this.parent.onAddChilren(this);
  }

  onAddChilren(child) {}
}

export default _node;

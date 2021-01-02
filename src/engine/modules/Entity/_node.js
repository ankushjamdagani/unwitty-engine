import { Commons } from '../core';

const Node = {
  create({ name, label, entity, parent, children } = {}) {
    const id = name || Commons.uid();
    return {
      id,
      label: label || id,
      type: null,
      entity: entity || null,
      parent: parent || null,
      children: children || []
    };
  },

  onAddChildren(parernt) {
    return parernt;
  },

  onRemoveChildren(parernt) {
    return parernt;
  },

  preRender() {},
  render() {},
  postRender() {},

  preUpdate() {},
  update() {},
  postUpdate() {}
};

export default Node;

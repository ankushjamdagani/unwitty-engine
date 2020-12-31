import { Commons } from '../core';

const Node = {
  create({ name, entity, parent, children } = {}) {
    const id = name || Commons.uid();
    return {
      id,
      label: id,
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
  }
};

export default Node;

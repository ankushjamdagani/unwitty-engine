import { core, DataStore } from '../modules';

import Entity from '../modules/Entity';

const { Base, Vector2D } = core;

class EntityManager extends Base {
  constructor(props) {
    super(props);
    const { data, ...restProps } = props;

    this.props = restProps;

    this.createScene(data);
  }

  set root(elem) {
    DataStore.setData((entities) => {
      entities.world = elem;
    }, 'entities');

    return this;
  }

  get root() {
    return this.props.getData().entities.world;
  }

  createScene({ width, height }) {
    const world = Entity.World.create({
      name: 'world',
      gravity: 0,
      bounds: [
        Vector2D.create([-Infinity, -Infinity]),
        Vector2D.create([Infinity, Infinity])
      ]
    });
    const light = Entity.Light.create({
      name: 'main_light',
      position: Vector2D.zero()
    });
    const camera = Entity.Camera.create({
      name: 'camera',
      position: Vector2D.zero(),
      rotation: 0,
      width,
      height,
      minPosition: [-100, -100], // -buffer
      maxPosition: [width * 1.5 + 100 - width, height * 1.5 + 100 - height] // (map size + buffer) - width
    });

    this.root = world;
    this.addChildren(world, light);
    this.addChildren(world, camera);
  }

  getEntityById(nodeId) {
    const { entities } = this.props.getData();
    return entities[nodeId || 'world'];
  }

  remove({ id }) {
    const { entities } = this.props.getData();
    const _parent = entities[id];

    if (!_parent) {
      return;
    }

    DataStore.setData((entities) => {
      delete entities[id];
    }, 'entities');

    _parent.children.forEach((id) => {
      this.remove({ id });
    });
  }

  addChildren({ id }, children) {
    const { entities } = this.props.getData();

    let _parent = entities[id];
    const _children = { ...children, parent: _parent.id };

    _parent = {
      ..._parent,
      children: !_parent.children.includes(_children.id)
        ? [..._parent.children, _children.id]
        : _parent.children
    };

    const comp = Entity.get(_parent.type);
    if (comp.onAddChildren) {
      _parent = comp.onAddChildren(_parent, _children);
    }

    DataStore.setData((entities) => {
      entities[_parent.id] = _parent;
      entities[_children.id] = _children;
    }, 'entities');

    _parent.parent && this.addChildren({ id: _parent.parent }, _parent);
  }

  removeChildren({ id }, children) {
    const { entities } = this.props.getData();
    let _parent = entities[id];
    _parent = {
      ..._parent,
      children: _parent.children.filter((nd) => nd.id !== children.id)
    };
    const _children = undefined;

    const comp = Entity.get(_parent.type);
    if (comp.onRemoveChildren) {
      _parent = comp.onRemoveChildren(_parent, _children);
    }

    DataStore.setData((entities) => {
      entities[_parent.id] = _parent;
      delete entities[_children.id];
    }, 'entities');

    _parent.parent && this.removeChildren({ id: _parent.parent }, _parent);
  }

  bindCamera(target) {
    DataStore.setData((entities) => {
      entities.camera = Entity.Camera.bindTarget(entities.camera, target);
    }, 'entities');
  }

  static preRender(element, envProps) {
    const comp = Entity.get(element.type);
    if (comp.preRender) {
      comp.preRender(element, envProps);
    }
  }

  static render(element, envProps) {
    const comp = Entity.get(element.type);
    if (comp.render) {
      comp.render(element, envProps);
    }
  }

  static postRender(element, envProps) {
    const comp = Entity.get(element.type);
    if (comp.postRender) {
      comp.postRender(element, envProps);
    }
  }

  static preUpdate(element, envProps) {
    const comp = Entity.get(element.type);
    if (comp.preUpdate) {
      return comp.preUpdate(element, envProps);
    }
    return comp;
  }

  static update(element, envProps) {
    const comp = Entity.get(element.type);
    if (comp.update) {
      return comp.update(element, envProps);
    }
    return comp;
  }

  static postUpdate(element, envProps) {
    const comp = Entity.get(element.type);
    if (comp.postUpdate) {
      return comp.postUpdate(element, envProps);
    }
    return comp;
  }
}

export default EntityManager;

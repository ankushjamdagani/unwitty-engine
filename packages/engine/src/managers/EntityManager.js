import { core, DataStore } from '../modules';

import Entity from '../modules/Entity';

const { Base, Vector2D } = core;

class EntityManager extends Base {
  constructor(props) {
    super(props);
    this.props = props;
  }

  get activeScene() {
    const {
      core: { activeSceneId },
      entities
    } = this.props.getData();

    return entities[activeSceneId];
  }

  set activeScene({ id }) {
    DataStore.setData((core) => {
      core.activeSceneId = id; // make it array to support multiple active scenes
    }, 'core');
  }

  get root() {
    const {
      core: { activeSceneId },
      entities
    } = this.props.getData();

    if (!entities[activeSceneId]) {
      throw Error('Need to make a scene first.');
    }

    const worldId = entities[activeSceneId].children[0];

    return entities[worldId];
  }

  getEntityById(nodeId) {
    const { entities } = this.props.getData();
    return entities[nodeId];
  }

  createScene({ name }) {
    const {
      core: { width, height }
    } = this.props.getData();

    const scene = Entity.Scene.create({
      name
    });
    const world = Entity.World.create({
      name: `world_${scene.id}`,
      label: 'world',
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
      name: `camera_${scene.id}`,
      position: Vector2D.zero(),
      rotation: 0,
      width,
      height,
      /**
       * @todo: remove hardcoding
       */
      minPosition: [-100, -100], // -buffer
      maxPosition: [width * 1.5 + 100 - width, height * 1.5 + 100 - height] // (map size + buffer) - width
    });

    DataStore.setData((entities) => {
      entities[scene.id] = scene;
    }, 'entities');

    this.addChildren(scene, world);
    this.addChildren(world, light);
    this.addChildren(world, camera);

    this.activeScene = { id: scene.id };

    return scene;
  }

  addChildren({ id }, children) {
    let _parent = this.getEntityById(id);

    if (!_parent) {
      return;
    }

    const _children = { ...children, parent: _parent.id };
    _parent = {
      ..._parent,
      children: !_parent.children.includes(_children.id)
        ? [..._parent.children, _children.id]
        : _parent.children
    };

    const Comp = Entity.get(_parent.type);
    if (Comp.onAddChildren) {
      _parent = Comp.onAddChildren(_parent, _children);
    }

    DataStore.setData((entities) => {
      entities[_parent.id] = _parent;
      entities[_children.id] = _children;
    }, 'entities');

    _parent.parent && this.addChildren({ id: _parent.parent }, _parent);
  }

  removeChildren({ id }, children) {
    let _parent = this.getEntityById(id);

    if (!_parent) {
      return;
    }

    const _children = undefined;
    _parent = {
      ..._parent,
      children: _parent.children.filter((nd) => nd.id !== children.id)
    };

    const Comp = Entity.get(_parent.type);
    if (Comp.onRemoveChildren) {
      _parent = Comp.onRemoveChildren(_parent, _children);
    }

    DataStore.setData((entities) => {
      entities[_parent.id] = _parent;
      delete entities[_children.id];
    }, 'entities');

    _parent.parent && this.removeChildren({ id: _parent.parent }, _parent);
  }

  bindCamera(target) {
    const {
      core: { activeSceneId }
    } = this.props.getData();
    DataStore.setData((entities) => {
      entities[`camera_${activeSceneId}`] = Entity.Camera.bindTarget(
        entities[`camera_${activeSceneId}`],
        target
      );
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

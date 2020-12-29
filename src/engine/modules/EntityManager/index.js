import { ENTITY_NODE_TYPES } from '../../constants';
import { Base } from '../core';

import World from './World';
import Light from './Light';
import Transform from './Transform';
import Layer from './Layer';
import Body from './Body';
import PhysicsBody from './PhysicsBody';
import FluidBody from './FluidBody';

class EntityManager extends Base {
  constructor(props) {
    super(props);
    this.props = props;
  }

  setRoot(elem) {
    this.props.syncData({
      entities: {
        world: elem
      }
    });
  }

  getRoot() {
    return this.props.getData().entities.world;
  }

  getEntityById(nodeId) {
    const { entities } = this.props.getData();
    return entities[nodeId || 'world'];
  }

  getItemsToRender(nodeId) {
    const { entities } = this.props.getData();
    const elem = entities[nodeId || 'world'];

    let items = [];

    items.push(elem);

    if (elem.children && elem.children.size) {
      elem.children.forEach((el) => {
        items = items.concat(entities[el]);
      });
    }
    return items;
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

    switch (_parent.type) {
      case ENTITY_NODE_TYPES.WORLD: {
        if (World.onAddChildren) {
          _parent = World.onAddChildren(_parent, _children);
        }
        break;
      }
      case ENTITY_NODE_TYPES.LIGHT: {
        if (Light.onAddChildren) {
          _parent = Light.onAddChildren(_parent, _children);
        }
        break;
      }
      case ENTITY_NODE_TYPES.TRANSFORM: {
        if (Transform.onAddChildren) {
          _parent = Transform.onAddChildren(_parent, _children);
        }

        break;
      }
      case ENTITY_NODE_TYPES.LAYER: {
        if (Layer.onAddChildren) {
          _parent = Layer.onAddChildren(_parent, _children);
        }
        break;
      }
      case ENTITY_NODE_TYPES.BODY: {
        if (Body.onAddChildren) {
          _parent = Body.onAddChildren(_parent, _children);
        }
        break;
      }
      case ENTITY_NODE_TYPES.PHYSICS_BODY: {
        if (PhysicsBody.onAddChildren) {
          _parent = PhysicsBody.onAddChildren(_parent, _children);
        }
        break;
      }
      case ENTITY_NODE_TYPES.FLUID_BODY: {
        if (FluidBody.onAddChildren) {
          _parent = FluidBody.onAddChildren(_parent, _children);
        }
        break;
      }
      default:
        break;
    }

    this.props.syncData({
      entities: {
        ...entities,
        [_parent.id]: _parent,
        [children.id]: _children
      }
    });

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

    switch (_parent.type) {
      case ENTITY_NODE_TYPES.WORLD: {
        if (World.onRemoveChildren)
          _parent = World.onRemoveChildren(_parent, _children);
        break;
      }
      case ENTITY_NODE_TYPES.LIGHT: {
        if (Light.onRemoveChildren)
          _parent = Light.onRemoveChildren(_parent, _children);
        break;
      }
      case ENTITY_NODE_TYPES.TRANSFORM: {
        if (Transform.onRemoveChildren)
          _parent = Transform.onRemoveChildren(_parent, _children);
        break;
      }
      case ENTITY_NODE_TYPES.LAYER: {
        if (Layer.onRemoveChildren)
          _parent = Layer.onRemoveChildren(_parent, _children);
        break;
      }
      case ENTITY_NODE_TYPES.BODY: {
        if (Body.onRemoveChildren)
          _parent = Body.onRemoveChildren(_parent, _children);
        break;
      }
      case ENTITY_NODE_TYPES.PHYSICS_BODY: {
        if (PhysicsBody.onRemoveChildren)
          _parent = PhysicsBody.onRemoveChildren(_parent, _children);
        break;
      }
      case ENTITY_NODE_TYPES.FLUID_BODY: {
        if (FluidBody.onRemoveChildren)
          _parent = FluidBody.onRemoveChildren(_parent, _children);
        break;
      }
      default:
        break;
    }

    this.props.syncData({
      entities: {
        ...entities,
        [_parent.id]: _parent,
        [children.id]: _children
      }
    });

    _parent.parent && this.removeChildren({ id: _parent.parent }, _parent);
  }

  static get World() {
    return World;
  }

  static get Light() {
    return Light;
  }

  static get Transform() {
    return Transform;
  }

  static get Layer() {
    return Layer;
  }

  static get Body() {
    return Body;
  }

  static get PhysicsBody() {
    return PhysicsBody;
  }

  static get FluidBody() {
    return FluidBody;
  }

  static createWorld(props) {
    return World.create({ ...props, name: 'world' });
  }

  static createLight(props) {
    return Light.create(props);
  }

  static createTransform(props) {
    return Transform.create(props);
  }

  static createLayer(props) {
    return Layer.create(props);
  }

  static createBody(props) {
    return Body.create(props);
  }

  static createPhysicsBody(props) {
    return PhysicsBody.create(props);
  }

  static createFluidBody(props) {
    return FluidBody.create(props);
  }
}

export default EntityManager;

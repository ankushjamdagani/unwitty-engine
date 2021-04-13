import { enableMapSet } from 'immer';

import { constants } from '@unwitty/core';
import Engine from './Engine';

import {
  AudioManager,
  DomManager,
  EntityManager,
  GridManager,
  RenderManager,
  ResourceManager,
  TimeManager,
  UpdateManager
} from './managers';

import { Entity, DataStore, core } from './modules';

// for immer
enableMapSet();
// setAutoFreeze(false);

// for redux store
DataStore.configureStore();

const EngineWrapper = {
  init: function init(props) {
    const engine = new Engine(props);

    this.seInstance(engine);

    return engine;
  },

  seInstance: function (engine) {
    if (!this.instances) {
      this.instances = {};
      window.__UNWITTY_INSTANCE__ = {};
    }
    this.instances[engine.key] = engine;
    window.__UNWITTY_INSTANCE__[engine.key] = engine;
  },

  getInstance: function (key) {
    return this.instances[key];
  },

  DataStore,
  Constants: constants,
  Entity,
  core,
  AudioManager,
  DomManager,
  EntityManager,
  GridManager,
  RenderManager,
  ResourceManager,
  TimeManager,
  UpdateManager
};

export default EngineWrapper;

import { enableMapSet } from 'immer';

import { constants, DataStore } from '@unwitty/core';
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

import { Entity, core } from './modules';

// for immer
enableMapSet();
// setAutoFreeze(false);

// for redux store

const EngineWrapper = {
  init: function init(props) {
    !DataStore.store && DataStore.configureStore();

    const engine = new Engine(props);

    this.setInstance(engine);

    return engine;
  },

  setInstance: function (engine) {
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

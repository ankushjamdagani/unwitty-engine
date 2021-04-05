import { enableMapSet } from 'immer';

import * as Constants from './constants';
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
    this.instance = engine;
    window.__UNWITTY_ENGINE__ = engine;
    return engine;
  },

  DataStore,
  Constants,
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

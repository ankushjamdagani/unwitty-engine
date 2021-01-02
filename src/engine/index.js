import { enableMapSet } from 'immer';

import * as Constants from './constants';
import Engine from './Engine';

import {
  AudioManager,
  DomManager,
  EntityManager,
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

Engine.init = (props) => {
  const _engine = new Engine(props);
  window.__UNWITTY_ENGINE__ = _engine;
  return _engine;
};

Engine.DataStore = DataStore;
Engine.Constants = Constants;
Engine.Entity = Entity;
Engine.core = core;

Engine.AudioManager = AudioManager;
Engine.DomManager = DomManager;
Engine.EntityManager = EntityManager;
Engine.RenderManager = RenderManager;
Engine.ResourceManager = ResourceManager;
Engine.TimeManager = TimeManager;
Engine.UpdateManager = UpdateManager;

export default Engine;

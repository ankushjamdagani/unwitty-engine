import { enableMapSet } from 'immer';

import {
  DataStore,
  EntityManager,
  RenderManager,
  ResourceManager,
  TimeManager
} from './modules';
import * as Constants from './constants/index';
import Engine from './Engine';

// for immer
enableMapSet();
// setAutoFreeze(false);

// for resux store
DataStore.configureStore();

Engine.init = (props) => {
  const _engine = new Engine(props);
  window.__UNWITTY_ENGINE__ = _engine;
  return _engine;
};

Engine.DataStore = DataStore;
Engine.Constants = Constants;
Engine.EntityManager = EntityManager;
Engine.RenderManager = RenderManager;
Engine.ResourceManager = ResourceManager;
Engine.TimeManager = TimeManager;

export default Engine;

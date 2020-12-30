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

Engine.DataStore = DataStore;
Engine.Constants = Constants;
Engine.EntityManager = EntityManager;
Engine.RenderManager = RenderManager;
Engine.ResourceManager = ResourceManager;
Engine.TimeManager = TimeManager;

export default Engine;

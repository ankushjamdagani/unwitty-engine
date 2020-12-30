import { enableMapSet, setAutoFreeze } from 'immer';

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
setAutoFreeze(true);

// for resux store
DataStore.configureStore();

function GameEngine(props) {
  return new Engine(props);
}

const Helpers = {
  EntityManager,
  RenderManager,
  ResourceManager,
  TimeManager
};

export { DataStore, Constants, Helpers };
export default GameEngine;

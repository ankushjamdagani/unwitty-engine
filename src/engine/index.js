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

DataStore.configureStore();
enableMapSet();

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

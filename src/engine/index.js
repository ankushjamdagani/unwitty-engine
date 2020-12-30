import { enableMapSet } from 'immer';

import { EntityManager, DataStore } from './modules';
import * as Constants from './constants/index';
import Engine from './Engine';

const store = DataStore.configureStore();
enableMapSet();

function GameEngine(props) {
  return new Engine({ store, ...props });
}

const Helpers = {
  EntityManager
};

export { store, Constants, Helpers };
export default GameEngine;

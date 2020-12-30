import { enableMapSet } from 'immer';

import Engine from './Engine';
import * as Constants from './constants/index';

import EntityManager from './modules/EntityManager';

import configureStore from './DataStore/configureStore';

const store = configureStore();
enableMapSet();

function GameEngine(props) {
  return new Engine({ store, ...props });
}

const Helpers = {
  EntityManager
};

export { store, Constants, Helpers };
export default GameEngine;

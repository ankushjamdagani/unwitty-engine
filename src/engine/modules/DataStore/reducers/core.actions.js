import { SYNC, CLEAR } from './core.actionTypes';

function syncStore(data, context) {
  return {
    type: SYNC,
    data,
    context
  };
}

function clearStore(data, context) {
  return {
    type: CLEAR,
    data,
    context
  };
}

export { syncStore, clearStore };

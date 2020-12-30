import { SYNC, CLEAR } from './core.actionTypes';

function setData(data, context) {
  return {
    type: SYNC,
    data,
    context
  };
}

function clearData(data, context) {
  return {
    type: CLEAR,
    data,
    context
  };
}

export { setData, clearData };

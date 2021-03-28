import { SYNC, CLEAR } from './actionTypes';

import initialState from './initialState';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SYNC: {
      return {
        ...state,
        [action.context]: action.data
      };
    }
    case CLEAR: {
      return action.context
        ? {
            ...state,
            [action.context]: initialState[action.context]
          }
        : initialState;
    }
    default: {
      return state;
    }
  }
}

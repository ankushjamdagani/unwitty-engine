import { SYNC, CLEAR } from './actionTypes';

const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, action) {
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
            [action.context]: INITIAL_STATE[action.context]
          }
        : INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
}

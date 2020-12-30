import { SYNC, CLEAR } from './core.actionTypes';

const INITIAL_STATE = {
  core: {},
  timeManager: {},
  resourceManager: {
    resources: {}
  },
  entityManager: {
    entities: {}
  },
  renderManager: {}
};

export default function coreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SYNC: {
      return {
        ...state,
        [action.context]: {
          ...(state[action.context] || {}),
          ...action.data
        }
      };
    }
    case CLEAR: {
      return {
        ...state,
        [action.context]: INITIAL_STATE[action.context] || {}
      };
    }
    default: {
      return state;
    }
  }
}

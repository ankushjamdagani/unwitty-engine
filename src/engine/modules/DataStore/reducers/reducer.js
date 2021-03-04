import { SYNC, CLEAR } from './actionTypes';

const INITIAL_STATE = {
  core: {},
  timing: {},
  resources: {},
  entities: {},
  canvasMap: new Map(),
  AudioManager: {},
  DomManager: {},
  EntityManager: {},
  RenderManager: {},
  ResourceManager: {},
  TimeManager: {},
  UpdateManager: {}
};

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

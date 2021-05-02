import produce from 'immer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import loggerMiddleware from './middleware/Logger';
import createReducerManager from './createReducerManager';

import reducer from './reducers';

import * as Actions from './reducers/actions';

/**
 * - Dynamic Reducers - https://tylergaw.com/articles/dynamic-redux-reducers/ or Just use DataStore.setData
 */
const DataStore = {
  store: null,
  reducerManager: null,
  defaultReducer: 'engine_state',

  getData(context, reducer) {
    const _reducer = reducer || this.defaultReducer;
    return context
      ? this.store.getState()[_reducer][context]
      : this.store.getState()[_reducer];
  },

  setData(dataGetter, context, reducer) {
    const _reducer = reducer || this.defaultReducer;
    if (typeof dataGetter === 'function') {
      const _data = produce(DataStore.getData(context, _reducer), dataGetter);
      this.store.dispatch(Actions.setData(_data, context, _reducer));
    } else {
      this.store.dispatch(Actions.setData(dataGetter, context, _reducer));
    }
  },

  clearData(data, context) {
    this.store.dispatch(Actions.clearData(data, context));
  },

  configureStore(preloadedState) {
    const middlewares = [
      // loggerMiddleware
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const composedEnhancers = composeWithDevTools(middlewareEnhancer);

    const reducerManager = createReducerManager({ engine_state: reducer });

    // Create a store with the root reducer function being the one exposed by the manager.
    this.store = createStore(
      reducerManager.reduce,
      preloadedState,
      composedEnhancers
    );

    this.reducerManager = reducerManager;

    return this.store;
  },

  observeStore(select, onChange, reducer) {
    const self = this;
    let currentState;
    const _reducer = reducer || this.defaultReducer;

    function handleChange() {
      const nextState = select(self.store.getState()[_reducer]);
      if (nextState !== currentState) {
        currentState = nextState;
        onChange(currentState);
      }
    }

    const unsubscribe = self.store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
  }
};

export default DataStore;

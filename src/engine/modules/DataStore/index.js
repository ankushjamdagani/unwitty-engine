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

  getData(context, reducer = 'engine') {
    return context
      ? this.store.getState()[reducer][context]
      : this.store.getState()[reducer];
  },

  setData(dataGetter, context, reducer = 'engine') {
    if (typeof dataGetter === 'function') {
      const _data = produce(DataStore.getData(context, reducer), dataGetter);
      this.store.dispatch(Actions.setData(_data, context, reducer));
    } else {
      this.store.dispatch(Actions.setData(dataGetter, context, reducer));
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

    const reducerManager = createReducerManager({ engine: reducer });

    // Create a store with the root reducer function being the one exposed by the manager.
    this.store = createStore(
      reducerManager.reduce,
      preloadedState,
      composedEnhancers
    );

    this.reducerManager = reducerManager;

    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //   module.hot.accept('./reducers', () => store.replaceReducer(coreReducer));
    // }

    return this.store;
  },

  observeStore(select, onChange, reducer = 'engine') {
    const _this = this;
    let currentState;

    function handleChange() {
      const nextState = select(_this.store.getState()[reducer]);
      if (nextState !== currentState) {
        currentState = nextState;
        onChange(currentState);
      }
    }

    const unsubscribe = _this.store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
  }
};

export default DataStore;

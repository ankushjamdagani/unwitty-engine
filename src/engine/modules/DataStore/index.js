import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import loggerMiddleware from './middleware/Logger';

import rootReducer from './reducers';

import * as Actions from './reducers/core.actions';

let _store = {};

const DataStore = {
  getStore() {
    return _store;
  },

  getData(context) {
    return context ? _store.getState()[context] : _store.getState();
  },

  setData(data, context) {
    _store.dispatch(Actions.setData(data, context));
  },

  clearData(data, context) {
    _store.dispatch(Actions.clearData(data, context));
  },

  configureStore(preloadedState) {
    const middlewares = [
      /** loggerMiddleware */
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const composedEnhancers = composeWithDevTools(middlewareEnhancer);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
    // }

    _store = store;
    return _store;
  },

  observeStore(select, onChange) {
    let currentState;

    function handleChange() {
      const nextState = select(_store.getState());
      if (nextState !== currentState) {
        currentState = nextState;
        onChange(currentState);
      }
    }

    const unsubscribe = _store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
  }
};

export default DataStore;

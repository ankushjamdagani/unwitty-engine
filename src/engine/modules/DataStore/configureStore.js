import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import loggerMiddleware from './middleware/Logger';

import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [
    /** loggerMiddleware */
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  // }

  return store;
}

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from './App';

function mountEditor(store, engine) {
  const {
    core: { key }
  } = store.getState();
  const wrapper =
    document.getElementById(`wrapper_${key}`) ||
    document.getElementById('wrapper_demo_game');

  const overlaysWrapper = document.createElement('div');
  overlaysWrapper.setAttribute('class', `wrapper_overlays_demo_game`);
  overlaysWrapper.setAttribute('id', `wrapper_overlays_${key}`);

  wrapper.appendChild(overlaysWrapper);
  ReactDOM.render(
    <Provider store={store}>
      <App engine={engine} />
    </Provider>,
    document.getElementById(`wrapper_overlays_${key}`)
  );
}

export default mountEditor;

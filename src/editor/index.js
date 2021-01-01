import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';

import CommonStyle from './styles/common';
import ResetStyle from './styles/reset';
import theme from './styles/theme';

/**
 * ICONS ::  https://material.io/resources/icons/?style=baseline
 */

const Editor = {
  init: (DataStore, engine) => {
    const store = DataStore.getStore();

    const {
      core: { key }
    } = store.getState();

    const wrapper =
      document.getElementById(`wrapper_${key}`) ||
      document.getElementById('wrapper_unwitty_game');

    const overlaysWrapper = document.createElement('div');
    overlaysWrapper.setAttribute('class', `wrapper_overlays_unwitty_game`);
    overlaysWrapper.setAttribute('id', `wrapper_overlays_${key}`);

    wrapper.prepend(overlaysWrapper);
    ReactDOM.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <>
            <ResetStyle />
            <CommonStyle />
            <App engine={engine} />
          </>
        </ThemeProvider>
      </Provider>,
      document.getElementById(`wrapper_overlays_${key}`)
    );
  }
};

export default Editor;

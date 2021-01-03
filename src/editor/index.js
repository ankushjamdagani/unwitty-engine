import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';

import CommonStyle from './styles/common';
import ResetStyle from './styles/reset';
import theme from './styles/theme';

import DataStoreContext from './context/datoStore';

/**
 * ICONS ::  https://material.io/resources/icons/?style=baseline
 */

/**
 * Dynamic Reducers - https://tylergaw.com/articles/dynamic-redux-reducers/
 * or
 * Just use DataStore.setData
 */

const Editor = {
  init: (DataStore, engine) => {
    const store = DataStore.getStore();

    const {
      core: { key }
    } = store.getState();

    const wrapper = document.getElementById(`wrapper_${key}`);

    const overlaysWrapper = document.createElement('div');
    overlaysWrapper.setAttribute('class', `wrapper_overlays_unwitty_game`);
    overlaysWrapper.setAttribute('id', `wrapper_overlays_${key}`);

    wrapper.prepend(overlaysWrapper);
    ReactDOM.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <DataStoreContext.Provider value={{ DataStore }}>
            <>
              <ResetStyle />
              <CommonStyle />
              <App engine={engine} />
            </>
          </DataStoreContext.Provider>
        </ThemeProvider>
      </Provider>,
      document.getElementById(`wrapper_overlays_${key}`)
    );
  }
};

export default Editor;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Engine from '@unwitty/engine';
import { DataStore } from '@unwitty/core';

import './styles/main.css';

import theme from './styles/theme';
import DataStoreContext from './dataStore/context';
import reducer from './dataStore/reducers';

import App from './App';

/**
 * - ICONS - https://material.io/resources/icons/?style=baseline
 */
const Editor = {
  init: key => {
    const editorWrapperId = `${key}_unwitty_editor_wrapper`;

    if (document.getElementById(editorWrapperId)) {
      // already initialised
      return;
    }

    const engine = Engine.getInstance(key);
    DataStore.reducerManager.add('editor_state', reducer);

    const editorWrapper = document.createElement('div');
    editorWrapper.setAttribute('class', 'unwitty_editor_wrapper');
    editorWrapper.setAttribute('id', `${key}_unwitty_editor_wrapper`);

    editorWrapper.innerHTML = `
      <div id="unwitty_editor_app_wrapper"></div>
      <div id="unwitty_editor_canvas_wrapper">
        <canvas id="unwitty_editor_canvas_base" class="unwitty_editor_canvas"></canvas>
      </div>
    `;

    const wrapper = document.getElementById(`${key}_wrapper`).parentElement;
    wrapper.prepend(editorWrapper);

    ReactDOM.render(
      <Provider store={DataStore.store}>
        <ChakraProvider theme={theme}>
          <DataStoreContext.Provider value={{ key, engine }}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </DataStoreContext.Provider>
        </ChakraProvider>
      </Provider>,
      document.getElementById(`unwitty_editor_app_wrapper`)
    );
  }
};

export default Editor;

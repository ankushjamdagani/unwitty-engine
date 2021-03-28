import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

// eslint-disable-next-line import/no-named-as-default-member
import './styles/main.css';

import theme from './styles/theme';
import DataStoreContext from './dataStore/context';
import reducer from './dataStore/reducers';

import App from './App';

/**
 * - ICONS - https://material.io/resources/icons/?style=baseline
 */

const Editor = {
  init: (DataStore, engine) => {
    DataStore.reducerManager.add('editor', reducer);

    const {
      core: { key }
    } = DataStore.getData();

    const editorWrapper = document.createElement('div');
    editorWrapper.setAttribute('class', 'unwitty_editor_wrapper');
    editorWrapper.setAttribute('id', 'unwitty_editor_wrapper');

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
          <DataStoreContext.Provider value={{ DataStore }}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App engine={engine} />
          </DataStoreContext.Provider>
        </ChakraProvider>
      </Provider>,
      document.getElementById(`unwitty_editor_app_wrapper`)
    );
  }
};

export default Editor;

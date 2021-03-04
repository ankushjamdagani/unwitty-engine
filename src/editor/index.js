import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

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

    const wrapper = document.getElementById(`wrapper_${key}`);

    const overlaysWrapper = document.createElement('div');
    overlaysWrapper.setAttribute('class', `wrapper_overlays_unwitty_game`);
    overlaysWrapper.setAttribute('id', `wrapper_overlays_${key}`);

    wrapper.prepend(overlaysWrapper);
    ReactDOM.render(
      <Provider store={DataStore.store}>
        <ChakraProvider theme={theme}>
          <DataStoreContext.Provider value={{ DataStore }}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App engine={engine} />
          </DataStoreContext.Provider>
        </ChakraProvider>
      </Provider>,
      document.getElementById(`wrapper_overlays_${key}`)
    );
  }
};

export default Editor;

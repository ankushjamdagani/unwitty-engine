import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import '@fontsource/open-sans/700.css';
import '@fontsource/raleway';
import '@fontsource/press-start-2p';
import '@fontsource/roboto-mono';

import { DataStore } from '@unwitty/core';

import theme from './styles/theme';
import reducer from './dataStore/reducers';

import App from './App.js';

!DataStore.store && DataStore.configureStore();
DataStore.reducerManager.add('app_state', reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={DataStore.store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

if (import.meta.hot) {
  import.meta.hot.accept();
}

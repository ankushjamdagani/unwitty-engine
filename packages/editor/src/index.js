import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import '@fontsource/open-sans';
import '@fontsource/raleway';
import '@fontsource/press-start-2p';
import '@fontsource/roboto-mono';

/**
 * @todo: why is chakra-ui global not working?
 */
import './styles/main.css';
import theme from './styles/theme';

import { DataStore } from '@unwitty/core';
import reducer from './dataStore/reducer';
import initialState from './dataStore/reducer/initialState';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

!DataStore.store
  ? DataStore.configureStore(
      { app_state: initialState },
      { app_state: reducer }
    )
  : DataStore.reducerManager.add('app_state', reducer);

ReactDOM.render(
  <Provider store={DataStore.store}>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('app')
);

registerServiceWorker();

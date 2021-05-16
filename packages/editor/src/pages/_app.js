import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import '@fontsource/open-sans/700.css';
import '@fontsource/raleway';
import '@fontsource/press-start-2p';
import '@fontsource/roboto-mono';

/**
 * @todo: why is chakra-ui global not working?
 */
import '../styles/main.css';

import { DataStore } from '@unwitty/core';

import theme from '../styles/theme';
import reducer from '../dataStore/reducer';
import initialState from '../dataStore/reducer/initialState';

!DataStore.store
  ? DataStore.configureStore(initialState, { app_state: reducer })
  : DataStore.reducerManager.add('app_state', reducer);

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={DataStore.store}>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <title>Home | Unwitty Engine</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

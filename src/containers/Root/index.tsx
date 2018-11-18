import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from '@theme/index';
import Home from '@containers/Home';
import { configureStore } from '@redux/store';

const { store } = configureStore();

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </Provider>
);

export default hot(module)(Root);

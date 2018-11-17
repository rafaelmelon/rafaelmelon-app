import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as theme from '@theme/index';
import App from '@containers/App';

import reducers from '@redux/reducers';
const store = createStore(reducers);

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

export default hot(module)(Root);

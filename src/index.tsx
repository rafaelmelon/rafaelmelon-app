import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
import Home from '@containers/Home';

const rootElement = document.getElementById('root');

render(
  <AppContainer>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </AppContainer>,
  rootElement,
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('@containers/Home', () => {
    const NewApp = require('@containers/Home').default;

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      rootElement,
    );
  });
}

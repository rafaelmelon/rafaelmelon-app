import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';

import { theme, GlobalStyles } from '@theme/index';
import { App } from '@containers/index';
import { configureStore } from '@redux/store';
import messages_es from '@locales/es.json';
import messages_en from '@locales/en.json';

const localeData = {
  es: messages_es,
  en: messages_en,
};

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...es]);

const language =
  (navigator.languages && navigator.languages[0]) || navigator.language;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;

const { store } = configureStore();

const Root = () => (
  <IntlProvider locale={language} messages={messages}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <App />
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  </IntlProvider>
);

export default hot(module)(Root);

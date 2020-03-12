import * as React from 'react';
import { hot } from 'react-hot-loader';
import { addLocaleData, IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import { Home } from '@containers/index';
import messages_en from '@locales/en.json';
import messages_es from '@locales/es.json';
import messages_fr from '@locales/fr.json';
import { Provider } from '@store/index';
import { GlobalStyles, theme } from '@theme/index';

const localeData = {
  es: messages_es,
  en: messages_en,
  fr: messages_fr,
};

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';

addLocaleData([...en, ...es, ...fr]);

const language =
  (navigator.languages && navigator.languages[0]) || navigator.language;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;

const Root = () => (
  <IntlProvider locale={language} messages={messages}>
    <Provider>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <Home />
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  </IntlProvider>
);

export default hot(module)(Root);

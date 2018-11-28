import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Name } from './styles';

class Footer extends React.Component {
  public render() {
    return (
      <Container>
        <Name>
          <FormattedMessage id="footer.title" />
        </Name>
      </Container>
    );
  }
}

export default Footer;

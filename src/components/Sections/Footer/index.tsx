import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { withTheme } from 'styled-components';

import { iconLogo } from '@assets/index';
import { Image } from '@components/index';
import { Theme } from '@theme/index';

import { Container, Text } from './styles';

interface FooterProps {
  theme: Theme;
}

class Footer extends React.Component<FooterProps> {
  public render() {
    return (
      <Container>
        <Image src={iconLogo} iconWidth={this.props.theme.iconSize.x3} />
        <Text>
          <FormattedMessage id="footer.copy" />
        </Text>
      </Container>
    );
  }
}

export default withTheme(Footer);

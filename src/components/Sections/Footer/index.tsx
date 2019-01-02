import * as React from 'react';
import { withTheme } from 'styled-components';

import { logo } from '@assets/index';
import { Button, Image } from '@components/index';
import { Theme } from '@theme/index';

import { Container } from './styles';

interface FooterProps {
  theme: Theme;
  onNavigateContact: (event: React.MouseEvent<HTMLElement>) => void;
}

class Footer extends React.Component<FooterProps> {
  public render() {
    const { onNavigateContact } = this.props;

    return (
      <Container>
        <Button onClick={onNavigateContact} icon={true}>
          <Image src={logo} iconWidth={this.props.theme.iconSize.x3} />
        </Button>
      </Container>
    );
  }
}

export default withTheme(Footer);

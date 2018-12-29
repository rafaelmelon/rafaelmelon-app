import * as React from 'react';
import { withTheme } from 'styled-components';

import { Image, Button } from '@components/index';
import { logo } from '@assets/index';
import { Theme } from '@theme/index';

import { Container } from './styles';

interface FooterProps {
  theme: Theme;
  viewport: {
    width: number | null;
    height: number | null;
  };
  onPageSection: (page: number) => any;
}

class Footer extends React.Component<FooterProps> {
  onNextPage = () => {
    this.props.onPageSection(1);
  };

  public render() {
    return (
      <Container>
        <Button onClick={this.onNextPage} icon={true}>
          <Image src={logo} iconWidth={this.props.theme.iconSize.x3} />
        </Button>
      </Container>
    );
  }
}

export default withTheme(Footer);

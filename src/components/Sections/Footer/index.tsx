import * as React from 'react';
import { withTheme } from 'styled-components';

import { logo } from '@assets/index';
import { Button, Image } from '@components/index';
import { Theme } from '@theme/index';
import { VIEWPORT } from '@utils/index';

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
  public onNextPage = () => {
    this.props.onPageSection(1);
  };

  public render() {
    const { viewport } = this.props;
    const isPhone = viewport.width && viewport.width <= VIEWPORT.phone;

    if (isPhone) {
      return (
        <Container>
          <Image src={logo} iconWidth={this.props.theme.iconSize.x3} />
        </Container>
      );
    }

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

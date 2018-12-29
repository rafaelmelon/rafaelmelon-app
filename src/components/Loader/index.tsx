import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { withTheme } from 'styled-components';

import { Image } from '@components/index';
import { loaderCircle } from '@assets/index';
import { Theme } from '@theme/index';

import { Container } from './styles';

interface LoaderProps {
  theme: Theme;
  viewport: {
    width: number | null;
    height: number | null;
  };
}

class Loader extends React.Component<LoaderProps> {
  public render() {
    return (
      <CSSTransitionGroup
        transitionName={'loader'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container viewport={this.props.viewport}>
          <Image src={loaderCircle} iconWidth={this.props.theme.iconSize.x4} />
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default withTheme(Loader);

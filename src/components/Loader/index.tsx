import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { withTheme } from 'styled-components';

import { iconLoaderCircle } from '@assets/index';
import { Image } from '@components/index';
import { Theme } from '@theme/index';

import { Container } from './styles';

interface LoaderProps {
  theme: Theme;
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
        <Container>
          <Image
            src={iconLoaderCircle}
            iconWidth={this.props.theme.iconSize.x4}
          />
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default withTheme(Loader);

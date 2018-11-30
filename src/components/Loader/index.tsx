import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import { Image } from '@components/index';
import { loaderCircle } from '@assets/index';
import { theme } from '@theme/index';

import { Container } from './styles';

class Loader extends React.Component {
  public render() {
    return (
      <CSSTransitionGroup
        transitionName={'loader'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container>
          <Image src={loaderCircle} iconWidth={theme.iconSize.x5} />
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default Loader;

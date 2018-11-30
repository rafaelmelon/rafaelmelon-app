import * as React from 'react';

import { Image } from '@components/index';
import { loaderCircle } from '@assets/index';
import { theme } from '@theme/index';

import { Container } from './styles';

class Loader extends React.Component {
  public render() {
    return (
      <Container>
        <Image src={loaderCircle} iconWidth={theme.iconSize.x5} />
      </Container>
    );
  }
}

export default Loader;

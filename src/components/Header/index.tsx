import * as React from 'react';

import { Container } from './styles';

interface IProps {
  user: any;
}

class Header extends React.Component<IProps> {
  public render() {
    return <Container>{this.props.user.name}</Container>;
  }
}

export default Header;

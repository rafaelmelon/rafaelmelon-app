import * as React from 'react';

import { User } from '@redux/modules/user';

import { Container } from './styles';

interface IProps {
  user: User;
}

class Header extends React.Component<IProps> {
  public render() {
    return <Container>{this.props.user.name}</Container>;
  }
}

export default Header;

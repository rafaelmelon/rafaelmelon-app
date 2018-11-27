import * as React from 'react';

import { Image } from '@components/index';
import { User } from '@redux/modules/user';

import { Container, Avatar, Name, Description } from './styles';

interface Props {
  user: User;
}

class Header extends React.Component<Props> {
  public render() {
    const { avatar_url, bio, name } = this.props.user;
    return (
      <Container>
        <Avatar>
          <Image src={avatar_url} />
        </Avatar>
        <Name>{name}</Name>
        <Description>{bio}</Description>
      </Container>
    );
  }
}

export default Header;

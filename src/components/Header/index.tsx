import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Image } from '@components/index';
import { User } from '@redux/modules/user';
import { logo } from '@assets/index';
import { theme } from '@theme/index';

import { Container, Avatar, Name, Description } from './styles';

interface Props {
  user: User;
}

class Header extends React.Component<Props> {
  public render() {
    const { avatar_url, bio, name } = this.props.user;
    return (
      <Container>
        <Image src={logo} iconWidth={theme.iconSize.x1} />
        <Avatar>
          <Image src={avatar_url} />
        </Avatar>
        <Name>
          <FormattedMessage id="header.title" values={{ value: name }} />
        </Name>
        <Description>{bio}</Description>
      </Container>
    );
  }
}

export default Header;

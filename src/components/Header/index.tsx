import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';

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
      <CSSTransitionGroup
        transitionName={'header'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
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
      </CSSTransitionGroup>
    );
  }
}

export default Header;

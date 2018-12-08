import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';

import { Image, Link } from '@components/index';
import { fetchUser, User } from '@redux/modules/user';
import { logo, codepen, github, linkedin, twitter } from '@assets/index';
import { theme } from '@theme/index';

import {
  Container,
  Logo,
  Welcome,
  Name,
  Description,
  SocialMedia,
} from './styles';

const socialMedia = [
  {
    name: 'Codepen',
    url: '#',
    urlImage: codepen,
  },
  {
    name: 'GitHub',
    url: '#',
    urlImage: github,
  },
  {
    name: 'LinkedIn',
    url: '#',
    urlImage: linkedin,
  },
  {
    name: 'Twitter',
    url: '#',
    urlImage: twitter,
  },
];

interface HeaderProps {
  user: User;
  fetchUser: () => any;
}

class Header extends React.Component<HeaderProps> {
  componentDidMount() {
    this.props.fetchUser();
  }

  public render() {
    const { bio, name } = this.props.user;
    return (
      <CSSTransitionGroup
        transitionName={'header'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container>
          <Logo>
            <Image src={logo} iconWidth={theme.iconSize.x1} />
          </Logo>
          <Welcome>
            <Name>
              <FormattedMessage id="header.title" values={{ value: name }} />
            </Name>
            <Description>{bio}</Description>
          </Welcome>
          <SocialMedia>
            {socialMedia.map(item => (
              <Link key={item.name} href={item.url}>
                <Image src={item.urlImage} iconWidth={theme.iconSize.x1} />
              </Link>
            ))}
          </SocialMedia>
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default connect(
  state => ({
    user: state.user.user,
  }),
  {
    fetchUser,
  },
)(Header);
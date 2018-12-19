import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';

import { Contact } from '@containers/index';
import { Image, Link } from '@components/index';
import { fetchUser, User } from '@redux/modules/user';
import { AppState } from '@redux/modules';
import { logo, iconArrow } from '@assets/index';
import { media } from '@utils/mocks';
import { theme } from '@theme/index';

import {
  Container,
  Logo,
  Welcome,
  Name,
  Description,
  Button,
  SocialMedia,
  NavigateBottom,
} from './styles';

interface HeaderProps {
  user: User;
  fetchUser: () => any;
}

class Header extends React.Component<HeaderProps> {
  state = {
    contact: false,
  };

  componentDidMount() {
    // this.props.fetchUser();
  }

  onNavigateContact = () => {
    this.setState({ contact: true });
  };

  onNavigateHome = () => {
    this.setState({ contact: false });
  };

  onNextPage = () => {
    window.fpTurnTo(2);
  };

  public render() {
    // const { bio, name } = this.props.user;

    if (!this.state.contact) {
      return (
        <CSSTransitionGroup
          transitionName={'header'}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <Container>
            <Logo>
              <Image src={logo} iconWidth={theme.iconSize.x2} />
            </Logo>
            <SocialMedia>
              {media.map(item => (
                <Link key={item.name} href={item.url}>
                  <Image src={item.urlImage} iconWidth={theme.iconSize.x1} />
                </Link>
              ))}
            </SocialMedia>
            <Welcome>
              <Name>
                <FormattedMessage
                  id="header.title"
                  values={{ value: 'Rafael Melón' }}
                />
              </Name>
              <Description>
                <FormattedMessage id="header.subtitle" />
              </Description>
              <Button onClick={this.onNavigateContact}>
                <FormattedMessage id="header.button" />
              </Button>
            </Welcome>
            <NavigateBottom onClick={this.onNextPage}>
              <Image src={iconArrow} iconWidth={theme.iconSize.x1} />
            </NavigateBottom>
          </Container>
        </CSSTransitionGroup>
      );
    }
    return <Contact onClose={this.onNavigateHome} />;
  }
}

export default connect(
  (state: AppState) => ({
    user: state.user.user,
  }),
  {
    fetchUser,
  },
)(Header);

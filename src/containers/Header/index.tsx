import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';
import { withTheme } from 'styled-components';

import { Contact } from '@containers/index';
import { Image, Button } from '@components/index';
import { fetchUser, User } from '@redux/modules/user';
import { AppState } from '@redux/modules';
import { logo, iconArrow } from '@assets/index';
import { media } from '@utils/mocks';
import { Theme } from '@theme/index';

import {
  Container,
  ButtonLogo,
  Welcome,
  Name,
  Description,
  SocialMedia,
  ButtonMedia,
  ButtonBottom,
} from './styles';

interface HeaderProps {
  theme: Theme;
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
    const { theme } = this.props;
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
            <ButtonLogo onClick={this.onNavigateContact} icon={true}>
              <Image src={logo} iconWidth={theme.iconSize.x1} />
            </ButtonLogo>
            <SocialMedia>
              {media.map(item => (
                <ButtonMedia
                  key={item.name}
                  onClick={this.onNavigateContact}
                  icon={true}>
                  <Image src={item.urlImage} iconWidth={theme.iconSize.x1} />
                </ButtonMedia>
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
                <FormattedMessage id={'header.button'} />
              </Button>
            </Welcome>
            <ButtonBottom onClick={this.onNextPage} icon={true}>
              <Image src={iconArrow} iconWidth={theme.iconSize.x1} />
            </ButtonBottom>
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
)(withTheme(Header));

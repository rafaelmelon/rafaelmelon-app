import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';
import { withTheme } from 'styled-components';

import { Image, Button } from '@components/index';
import { User } from '@redux/modules/user';
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
  onNavigateContact: () => any;
}

class Header extends React.Component<HeaderProps> {
  onNextPage = () => {
    window.fpTurnTo(2);
  };

  public render() {
    const { theme, onNavigateContact } = this.props;
    // const { bio, name } = this.props.user;

    return (
      <CSSTransitionGroup
        transitionName={'header'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container>
          <ButtonLogo onClick={onNavigateContact} icon={true}>
            <Image src={logo} iconWidth={theme.iconSize.x1} />
          </ButtonLogo>
          <SocialMedia>
            {media.map(item => (
              <ButtonMedia
                key={item.name}
                onClick={onNavigateContact}
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
            <Button onClick={onNavigateContact}>
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
}

export default withTheme(Header);

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { withTheme } from 'styled-components';

import { Image, Button } from '@components/index';
import { User } from '@redux/modules/user';
import { logoAlt, iconArrow } from '@assets/index';
import { SOCIAL, VIEWPORT } from '@utils/index';
import { Theme } from '@theme/index';

import {
  Container,
  ButtonLogo,
  Welcome,
  Title,
  Description,
  SocialMedia,
  ButtonMedia,
  ButtonBottom,
} from './styles';

interface HeaderProps {
  theme: Theme;
  user: User;
  viewport: {
    width: number | null;
    height: number | null;
  };
  onNavigateContact: () => any;
  onPageSection: (page: number) => any;
}

class Header extends React.Component<HeaderProps> {
  onNextPage = () => {
    this.props.onPageSection(2);
  };

  public render() {
    const { theme, onNavigateContact, viewport } = this.props;
    const isPhone = viewport.width && viewport.width <= VIEWPORT.phone;
    // const { bio, name } = this.props.user;

    return (
      <Container>
        <ButtonLogo onClick={onNavigateContact} icon={true}>
          <Image src={logoAlt} iconWidth={theme.iconSize.x1} />
        </ButtonLogo>
        <SocialMedia>
          {SOCIAL.map(item => (
            <ButtonMedia
              key={item.name}
              onClick={onNavigateContact}
              icon={true}>
              <Image src={item.urlImage} iconWidth={theme.iconSize.x1} />
            </ButtonMedia>
          ))}
        </SocialMedia>
        <Welcome>
          <Title>
            <FormattedMessage
              id="header.title"
              values={{ value: 'Rafael Melón' }}
            />
          </Title>
          <Description>
            <FormattedMessage id="header.subtitle" />
          </Description>
          <Button onClick={onNavigateContact}>
            <FormattedMessage id={'header.button'} />
          </Button>
        </Welcome>
        {!isPhone && (
          <ButtonBottom onClick={this.onNextPage} icon={true}>
            <Image src={iconArrow} iconWidth={theme.iconSize.x1} />
          </ButtonBottom>
        )}
      </Container>
    );
  }
}

export default withTheme(Header);

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { withTheme } from 'styled-components';

import { iconArrow, logoAlt } from '@assets/index';
import { Button, Image } from '@components/index';
import { User } from '@redux/modules/user';
import { Theme } from '@theme/index';
import { SOCIAL } from '@utils/index';

import {
  ButtonBottom,
  ButtonLogo,
  ButtonMedia,
  Container,
  Description,
  SocialMedia,
  Title,
  Welcome,
} from './styles';

interface HeaderProps {
  theme: Theme;
  user: User;
  onNavigateContact: (event: React.MouseEvent<HTMLElement>) => void;
  onPageSection: (page: number) => any;
}

class Header extends React.Component<HeaderProps> {
  public onNextPage = () => {
    this.props.onPageSection(1);
  };

  public onExternalNavigate = url => {
    window.open(url, '_blank');
  };

  public render() {
    const { theme, onNavigateContact, user } = this.props;

    return (
      <Container>
        <ButtonLogo onClick={onNavigateContact} icon={true}>
          <Image src={logoAlt} iconWidth={theme.iconSize.x1} />
        </ButtonLogo>
        <SocialMedia>
          {SOCIAL.map(item => (
            <ButtonMedia
              key={item.name}
              onClick={() => this.onExternalNavigate(item.url)}
              icon={true}>
              <Image src={item.urlImage} iconWidth={theme.iconSize.x1} />
            </ButtonMedia>
          ))}
        </SocialMedia>
        <ButtonLogo onClick={onNavigateContact} icon={true}>
          <Image src={logoAlt} iconWidth={theme.iconSize.x1} />
        </ButtonLogo>
        <Welcome>
          <Title>
            <FormattedMessage id="header.hi" />
            <FormattedMessage
              id="header.title"
              values={{ value: user && user.name ? name : 'Rafael Melón' }}
            />
          </Title>
          <Description>
            {user && user.bio ? (
              user.bio
            ) : (
              <FormattedMessage id="header.subtitle" />
            )}
          </Description>
          <Button onClick={onNavigateContact}>
            <FormattedMessage id={'header.button'} />
          </Button>
        </Welcome>
        <ButtonBottom onClick={this.onNextPage} icon={true}>
          <Image src={iconArrow} iconWidth={theme.iconSize.x1} />
        </ButtonBottom>
      </Container>
    );
  }
}

export default withTheme(Header);

import * as React from 'react';
import { withTheme } from 'styled-components';

import { iconLogoAlt } from '@assets/index';
import { Image } from '@components/index';
import { Theme } from '@theme/index';
import { SOCIAL } from '@utils/index';

import { ButtonMedia, Container, Logo, SocialMedia } from './styles';

interface MenuProps {
  theme: Theme;
}

class Menu extends React.Component<MenuProps> {
  public onExternalNavigate = url => {
    window.open(url, '_blank');
  };

  public render() {
    const { theme } = this.props;

    return (
      <Container>
        <Logo>
          <Image src={iconLogoAlt} iconWidth={theme.iconSize.x1} />
        </Logo>
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
      </Container>
    );
  }
}

export default withTheme(Menu);

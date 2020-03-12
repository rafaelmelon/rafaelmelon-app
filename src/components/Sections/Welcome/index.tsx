import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { withTheme } from 'styled-components';

import { iconLogo } from '@assets/index';
import { Image } from '@components/index';
import { Theme } from '@theme/index';
import { SOCIAL } from '@utils/index';

import { ButtonMedia, Container, Description, SocialMedia, Title } from './styles';

interface WelcomeProps {
  theme: Theme;
}

const Welcome: React.SFC<WelcomeProps> = ({ theme }) => (
  <Container>
    <Image src={iconLogo} iconWidth={theme.iconSize.x4} />
    <Title>
      <FormattedMessage id="header.title" />
    </Title>
    <Description>
      <FormattedMessage id="header.subtitle" />
    </Description>
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

export default withTheme(Welcome);

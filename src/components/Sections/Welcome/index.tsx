import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { User } from '@redux/modules/user';

import { Container, Description, Title } from './styles';

interface WelcomeProps {
  user: User;
}

class Welcome extends React.Component<WelcomeProps> {
  public onExternalNavigate = url => {
    window.open(url, '_blank');
  };

  public render() {
    const { user } = this.props;

    return (
      <Container>
        <Title>
          <FormattedMessage id="header.hi" />
          <FormattedMessage
            id="header.title"
            values={{ value: 'Rafael Melón' }}
          />
        </Title>
        <Description>
          {user && user.bio ? (
            user.bio
          ) : (
            <FormattedMessage id="header.subtitle" />
          )}
        </Description>
      </Container>
    );
  }
}

export default Welcome;

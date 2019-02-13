import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { User } from '@redux/modules/user';

import { Container, Description, Title, Welcome } from './styles';

interface HeaderProps {
  user: User;
}

class Header extends React.Component<HeaderProps> {
  public onExternalNavigate = url => {
    window.open(url, '_blank');
  };

  public render() {
    const { user } = this.props;

    return (
      <Container>
        <Welcome>
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
        </Welcome>
      </Container>
    );
  }
}

export default Header;

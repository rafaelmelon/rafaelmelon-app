import { History } from 'history';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';

import { Button } from '@components/index';
import { ROUTES } from '@utils/index';

import { Container, Title, Welcome } from './styles';

interface NotProps {
  history: History;
}

class NotPage extends React.Component<NotProps> {
  public componentDidMount() {
    document.title = 'Rafael Melón | Not found';
  }

  public onNavigateHome = () => {
    this.props.history.push(ROUTES.home);
  };

  public render() {
    return (
      <CSSTransitionGroup
        transitionName={'notfound'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container>
          <Welcome>
            <Title>
              <FormattedMessage id="notfound.title" />
            </Title>
            <Button onClick={this.onNavigateHome}>
              <FormattedMessage id={'notfound.button'} />
            </Button>
          </Welcome>
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default NotPage;

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';

import { Button } from '@components/index';
import { ROUTES } from '@utils/index';

import { Container, Title, Welcome } from './styles';

interface NotFoundProps {
  history: any;
}

class NotFound extends React.Component<NotFoundProps> {
  public state = {
    viewport: {
      height: null,
      width: null,
    },
  };

  public handleResize = () =>
    this.setState({
      viewport: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
    });

  public componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    document.title = 'Rafael Melón | Not found';
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
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
        <Container viewport={this.state.viewport}>
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

export default NotFound;

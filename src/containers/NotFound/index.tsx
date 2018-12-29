import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { CSSTransitionGroup } from 'react-transition-group';

import { ROUTES } from '@utils/index';
import { Button } from '@components/index';

import { Container, Welcome, Title } from './styles';

interface NotFoundProps {
  history: any;
}

class NotFound extends React.Component<NotFoundProps> {
  state = {
    viewport: {
      height: null,
      width: null,
    },
  };

  handleResize = () =>
    this.setState({
      viewport: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  onNavigateHome = () => {
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

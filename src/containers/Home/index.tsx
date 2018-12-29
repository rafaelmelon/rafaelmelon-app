import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Scroller, Section } from 'react-fully-scrolled';
import { CSSTransitionGroup } from 'react-transition-group';

import { AppState } from '@redux/modules';
import { fetchAuth, fetchUser, User } from '@redux/modules/user';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { Header, Elements, Footer } from '@components/index';
import { VIEWPORT, ROUTES } from '@utils/index';

import { Container } from './styles';

interface HomeProps {
  isAuth: boolean;
  repositories: Repository[];
  user: User;
  fetchAuth: () => any;
  fetchUser: () => any;
  fetchAllRepositories: () => any;
  history: any;
}

class Home extends React.Component<HomeProps, any> {
  state = {
    viewport: {
      height: null,
      width: null,
    },
    loading: true,
  };

  handleResize = () =>
    this.setState({
      viewport: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
    });

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  onNavigateContact = () => {
    this.props.history.push(ROUTES.contact);
  };

  onPageSection = (page: number) => {
    window.fpTurnTo(page);
  };

  renderHeader = () => (
    <Header
      user={this.props.user}
      onNavigateContact={this.onNavigateContact}
      onPageSection={this.onPageSection}
      viewport={this.state.viewport}
    />
  );

  renderElements = () => (
    <Elements
      repositories={this.props.repositories}
      viewport={this.state.viewport}
    />
  );

  renderFooter = () => (
    <Footer onPageSection={this.onPageSection} viewport={this.state.viewport} />
  );

  public render() {
    const { viewport } = this.state;
    const isPhone = viewport.width && viewport.width <= VIEWPORT.phone;

    // if (loading) {
    //   return <Loader />;
    // }

    if (isPhone) {
      return (
        <Container>
          {this.renderHeader()}
          {this.renderElements()}
          {this.renderFooter()}
        </Container>
      );
    }

    return (
      <CSSTransitionGroup
        transitionName={'home'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container>
          <Scroller curPage={1} isEnabled={true}>
            <Section>{this.renderHeader()}</Section>
            <Section>{this.renderElements()}</Section>
            <Section>{this.renderFooter()}</Section>
          </Scroller>
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default withRouter(
  connect(
    (state: AppState) => ({
      isAuth: state.user.isAuth,
      user: state.user.user,
      repositories: state.repositories.all,
    }),
    {
      fetchAuth,
      fetchUser,
      fetchAllRepositories,
    },
  )(Home),
);

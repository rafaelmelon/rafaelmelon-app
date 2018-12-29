import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Scroller, Section } from 'react-fully-scrolled';
import { CSSTransitionGroup } from 'react-transition-group';

import { AppState } from '@redux/modules';
import { fetchAuth, fetchUser, User } from '@redux/modules/user';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { Header, Elements, Footer, Loader } from '@components/index';
import { VIEWPORT, ROUTES } from '@utils/index';

import { Container } from './styles';

declare global {
  interface Window {
    fpTurnTo: any;
  }
}
interface HomeProps {
  isAuth: boolean;
  repositories: Repository[];
  user: User;
  fetchAuth: () => any;
  fetchUser: () => any;
  fetchAllRepositories: () => any;
  history: any;
}

interface HomeState {
  viewport: {
    width: number | null;
    height: number | null;
  };
  loading: boolean;
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      viewport: {
        height: null,
        width: null,
      },
      loading: true,
    };

    this.handleResize = this.handleResize.bind(this);
    this.onNavigateContact = this.onNavigateContact.bind(this);
    this.onPageSection = this.onPageSection.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderElements = this.renderElements.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
  }

  handleResize() {
    this.setState({
      viewport: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  onNavigateContact() {
    this.props.history.push(ROUTES.contact);
  }

  onPageSection(page: number) {
    window.fpTurnTo(page);
  }

  renderHeader() {
    return (
      <Header
        user={this.props.user}
        onNavigateContact={this.onNavigateContact}
        onPageSection={this.onPageSection}
        viewport={this.state.viewport}
      />
    );
  }

  renderElements() {
    return (
      <Elements
        repositories={this.props.repositories}
        viewport={this.state.viewport}
      />
    );
  }

  renderFooter() {
    return (
      <Footer
        onPageSection={this.onPageSection}
        viewport={this.state.viewport}
      />
    );
  }

  public render() {
    const { loading, viewport } = this.state;
    const isPhone = viewport.width && viewport.width <= VIEWPORT.phone;

    if (loading) {
      return <Loader viewport={this.state.viewport} />;
    }

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

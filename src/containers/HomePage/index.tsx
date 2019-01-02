import { History } from 'history';
import * as React from 'react';
import ReactPageScroller from 'react-page-scroller';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import { About, Elements, Footer, Header, Loader } from '@components/index';
import { AppState } from '@redux/modules';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { fetchAuth, fetchUser, User } from '@redux/modules/user';
import { repositoriesMock, ROUTES, VIEWPORT } from '@utils/index';

import { Container } from './styles';

interface HomeProps {
  isAuth: boolean;
  repositories: Repository[];
  user: User;
  fetchAuth: () => any;
  fetchUser: () => any;
  fetchAllRepositories: () => any;
  history: History;
}

interface HomeState {
  viewport: {
    width: number | null;
    height: number | null;
  };
  loading: boolean;
}

class HomePage extends React.Component<HomeProps, HomeState> {
  private reactPageScroller: ReactPageScroller;
  constructor(props: any) {
    super(props);
    this.state = {
      viewport: {
        height: null,
        width: null,
      },
      loading: true,
    };

    this.reactPageScroller = React.createRef();
    this.handleResize = this.handleResize.bind(this);
    this.onNavigateContact = this.onNavigateContact.bind(this);
    this.onPageSection = this.onPageSection.bind(this);
    this.renderSections = this.renderSections.bind(this);
  }

  public handleResize() {
    this.setState({
      viewport: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
    });
  }

  public componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    document.title = 'Rafael Melón | Home';
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  public onNavigateContact() {
    this.props.history.push(ROUTES.contact);
  }

  public onPageSection(page: number) {
    this.reactPageScroller.goToPage(page);
  }

  public renderSections() {
    const sections = [
      <Header
        key={'header'}
        user={this.props.user}
        onNavigateContact={this.onNavigateContact}
        onPageSection={this.onPageSection}
      />,
      <About key={'about'} onPageSection={this.onPageSection} />,
      <Elements key={'elements'} repositories={repositoriesMock} />,
      <Footer key={'footer'} onNavigateContact={this.onNavigateContact} />,
    ];
    return sections.map(item => item);
  }

  public render() {
    const { loading, viewport } = this.state;
    const isPhone = viewport.width && viewport.width <= VIEWPORT.phone;

    if (loading) {
      return <Loader viewport={this.state.viewport} />;
    }

    return (
      <CSSTransitionGroup
        transitionName={'home'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container>
          {!isPhone ? (
            <ReactPageScroller
              ref={c => (this.reactPageScroller = c)}
              animationTimer={600}>
              {this.renderSections()}
            </ReactPageScroller>
          ) : (
            <React.Fragment>{this.renderSections()}</React.Fragment>
          )}
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
  )(HomePage),
);
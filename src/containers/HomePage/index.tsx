import { History } from 'history';
import * as React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import { About, Elements, Footer, Header, Loader } from '@components/index';
import { AppState } from '@redux/modules';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { fetchAuth, fetchUser, pageLoaded, User } from '@redux/modules/user';
import { ROUTES } from '@utils/index';

import { Container } from './styles';

interface HomeProps {
  intl: InjectedIntl;
  isPageLoaded: boolean;
  isAuth: boolean;
  repositories: Repository[];
  user: User;
  pageLoaded: () => any;
  fetchAuth: () => any;
  fetchUser: () => any;
  fetchAllRepositories: () => any;
  history: History;
}

class HomePage extends React.Component<HomeProps, any> {
  constructor(props: any) {
    super(props);

    this.onNavigateContact = this.onNavigateContact.bind(this);
  }

  public componentDidMount() {
    this.props.fetchUser();
    this.props.fetchAllRepositories();
    if (!this.props.isPageLoaded) {
      setTimeout(() => this.props.pageLoaded(), 1500);
    }
    document.title = this.props.intl.formatMessage({
      id: 'home.title.page',
    });
  }

  public onNavigateContact() {
    this.props.history.push(ROUTES.contact);
  }

  public render() {
    if (!this.props.isPageLoaded) {
      return <Loader />;
    }

    return (
      <CSSTransitionGroup
        transitionName={'home'}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <Container>
          <Header
            user={this.props.user}
            onNavigateContact={this.onNavigateContact}
          />
          <About />
          <Elements repositories={this.props.repositories} />
          <Footer onNavigateContact={this.onNavigateContact} />
        </Container>
      </CSSTransitionGroup>
    );
  }
}

export default withRouter(
  connect(
    (state: AppState) => ({
      isPageLoaded: state.user.isPageLoaded,
      isAuth: state.user.isAuth,
      user: state.user.user,
      repositories: state.repositories.all,
    }),
    {
      pageLoaded,
      fetchAuth,
      fetchUser,
      fetchAllRepositories,
    },
  )(injectIntl(HomePage)),
);

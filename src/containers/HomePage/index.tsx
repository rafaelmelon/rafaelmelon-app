import { History } from 'history';
import * as React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import { withTheme } from 'styled-components';

import {
  About,
  Contact,
  Elements,
  Footer,
  Header,
  Loader,
  Menu,
} from '@components/index';
import { AppState } from '@redux/modules';
import { resetContactForm, sendContactForm } from '@redux/modules/forms';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { fetchAuth, fetchUser, pageLoaded, User } from '@redux/modules/user';
import { Theme } from '@theme/index';

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
  theme: Theme;
  success: string;
  sending: boolean;
  sendContactForm: (values: any) => any;
  resetContactForm: () => any;
}

class HomePage extends React.Component<HomeProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      bgColor: props.theme.colors.jonquil,
    };

    this.listenScrollEvent = this.listenScrollEvent.bind(this);
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
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  public listenScrollEvent(e) {
    const { jonquil, anakiwa, goldenrod } = this.props.theme.colors;
    const scrollY = window.scrollY;
    if (scrollY > 300 && scrollY < 1999) {
      this.setState({ bgColor: anakiwa });
    } else if (scrollY > 2000) {
      this.setState({ bgColor: goldenrod });
    } else {
      this.setState({ bgColor: jonquil });
    }
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
        <Container bgColor={this.state.bgColor}>
          <Menu />
          <Header user={this.props.user} />
          <About />
          <Elements repositories={this.props.repositories} />
          <Contact
            success={this.props.success}
            sending={this.props.sending}
            sendContactForm={this.props.sendContactForm}
            resetContactForm={this.props.resetContactForm}
          />
          <Footer />
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
      success: state.forms.success,
      sending: state.forms.sending,
    }),
    {
      pageLoaded,
      fetchAuth,
      fetchUser,
      fetchAllRepositories,
      sendContactForm,
      resetContactForm,
    },
  )(injectIntl(withTheme(HomePage))),
);

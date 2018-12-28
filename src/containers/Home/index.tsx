import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Scroller, Section } from 'react-fully-scrolled';

import { AppState } from '@redux/modules';
import { fetchAuth, fetchUser, User } from '@redux/modules/user';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { Header, Elements, Footer } from '@components/index';

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
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);

    // if (!this.props.isAuth) {
    //   this.props.fetchAuth();
    // }
  }

  onNavigateContact = () => {
    this.props.history.push('/contact');
  };

  onPageSection = (page: number) => {
    window.fpTurnTo(page);
  };

  public render() {
    // const { loading } = this.state;

    // if (loading) {
    //   return <Loader />;
    // }

    return (
      <Scroller curPage={1} isEnabled={true}>
        <Section>
          <Header
            user={this.props.user}
            onNavigateContact={this.onNavigateContact}
            onPageSection={this.onPageSection}
          />
        </Section>
        <Section>
          <Elements repositories={this.props.repositories} />
        </Section>
        <Section>
          <Footer onPageSection={this.onPageSection} />
        </Section>
      </Scroller>
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

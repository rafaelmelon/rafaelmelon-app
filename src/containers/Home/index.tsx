import * as React from 'react';
import { connect } from 'react-redux';

import { fetchUser, User } from '@redux/modules/user';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { Header, SectionList, Footer } from '@components/index';
import { GlobalStyles } from '@theme/index';

import { Container } from './styles';

interface Home {
  user: User;
  repositories: Repository[];
  fetchAllRepositories: () => any;
  fetchUser: () => any;
}

class Home extends React.Component<Home, any> {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchAllRepositories();
  }

  public render() {
    return (
      <Container>
        <GlobalStyles />
        <Header user={this.props.user} />
        <SectionList repositories={this.props.repositories} />
        <Footer />
      </Container>
    );
  }
}

export default connect(
  state => ({
    user: state.user.user,
    repositories: state.repositories.all,
  }),
  {
    fetchAllRepositories,
    fetchUser,
  },
)(Home);

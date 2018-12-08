import * as React from 'react';
import { connect } from 'react-redux';

import { fetchUser, User } from '@redux/modules/user';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import {
  Header,
  Elements,
  Footer,
  Loader,
} from '@components/index';

import { Container } from './styles';

interface Home {
  user: User;
  repositories: Repository[];
  fetchAllRepositories: () => any;
  fetchUser: () => any;
}

class Home extends React.Component<Home, any> {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);

    this.props.fetchUser();
    this.props.fetchAllRepositories();
  }

  public render() {
    const { loading } = this.state;
    const sizes = {
      width: this.props.width,
      height: this.props.height,
    };

    if (loading) {
      return <Loader />;
    }

    return (
      <Container>
        <Header user={this.props.user} />
        <Elements repositories={this.props.repositories} />
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

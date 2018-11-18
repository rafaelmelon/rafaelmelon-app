import * as React from 'react';
import { connect } from 'react-redux';
import { fetchUser, User } from '@redux/modules/user';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { Header, SectionList } from '@components/index';
import { reactLogo } from '@assets/index';

import { Container } from './styles';

interface IProps {
  user: User;
  repositories: Repository[];
  fetchAllRepositories: () => any;
  fetchUser: () => any;
}

class Home extends React.Component<IProps, any> {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchAllRepositories();
  }

  public render() {
    return (
      <Container>
        <Header user={this.props.user} />
        <SectionList repositories={this.props.repositories} />
        <img src={reactLogo} height="480" />
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

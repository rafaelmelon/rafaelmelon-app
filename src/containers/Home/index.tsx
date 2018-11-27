import * as React from 'react';
import { connect } from 'react-redux';

import { fetchUser, User } from '@redux/modules/user';
import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import { Header, SectionList, Image } from '@components/index';
import { logo } from '@assets/index';
import { GlobalStyles, theme } from '@theme/index';

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
        <Image src={logo} iconWidth={theme.iconSize.x1} />
        <Header user={this.props.user} />
        <SectionList repositories={this.props.repositories} />
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

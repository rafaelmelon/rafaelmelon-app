import * as React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '@redux/modules/user/action';
import { fetchAllRepositories } from '@redux/modules/repositories/action';
import { Header, SectionList } from '@components/index';

const reactLogo = require('./../../assets/img/react_logo.svg');
import { Container } from './styles';

interface IProps {
  user: object;
  repositories: any[];
  fetchAllRepositories: () => any;
  fetchUser: () => any;
}

class Home extends React.Component<IProps, undefined> {
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
  }
)(Home);

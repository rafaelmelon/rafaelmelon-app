import * as React from 'react';
import { connect } from 'react-redux';

import { fetchAllRepositories, Repository } from '@redux/modules/repositories';
import Element from './Element';
import { repositoriesMock } from '@utils/mocks';

import { Container } from './styles';

interface ElementsProps {
  repositories: Repository[];
  fetchAllRepositories: () => any;
}

class Elements extends React.Component<ElementsProps, any> {
  componentDidMount() {
    //this.props.fetchAllRepositories();
  }

  public render() {
    return <Container>{this.renderItems()}</Container>;
  }

  private renderItems = () =>
    repositoriesMock.map(item => <Element key={item.id} element={item} />);
}

export default connect(
  state => ({
    repositories: state.repositories.all,
  }),
  {
    fetchAllRepositories,
  },
)(Elements);

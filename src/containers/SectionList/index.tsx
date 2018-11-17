import * as React from 'react';
import { connect } from 'react-redux';
import { fetchAllRepositories } from '@redux/modules/repositories/action';
import Item from '@components/Item';

import { Container } from './styles';

interface IProps {
  repositories: any[];
  fetchAllRepositories: () => any;
}

class SectionList extends React.Component<IProps, undefined> {
  componentDidMount() {
    this.props.fetchAllRepositories();
  }

  public render() {
    return <Container>{this.renderItems()}</Container>;
  }

  private renderItems = () =>
    this.props.repositories.map(item => <Item key={item.id} data={item} />)
}

export default connect(
  state => ({
    repositories: state.repositories.all,
  }),
  {
    fetchAllRepositories,
  }
)(SectionList);

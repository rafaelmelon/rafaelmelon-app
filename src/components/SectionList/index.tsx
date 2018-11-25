import * as React from 'react';

import { Repository } from '@redux/modules/repositories';
import Item from './Item';

import { Container } from './styles';

interface SectionList {
  repositories: Repository[];
}

class SectionList extends React.Component<SectionList, any> {
  public render() {
    return <Container>{this.renderItems()}</Container>;
  }

  private renderItems = () =>
    this.props.repositories.map(item => <Item key={item.id} data={item} />);
}

export default SectionList;

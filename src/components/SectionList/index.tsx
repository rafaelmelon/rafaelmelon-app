import * as React from 'react';

import Item from './Item';

import { Container } from './styles';

interface IProps {
  repositories: any[];
}

class SectionList extends React.Component<IProps, undefined> {
  public render() {
    return <Container>{this.renderItems()}</Container>;
  }

  private renderItems = () =>
    this.props.repositories.map(item => <Item key={item.id} data={item} />);
}

export default SectionList;

import * as React from 'react';

import { Repository } from '@redux/modules/repositories';
import Element from './Element';

import { Container } from './styles';

interface Props {
  repositories: Repository[];
}

class Elements extends React.Component<Props, any> {
  public render() {
    return <Container>{this.renderItems()}</Container>;
  }

  private renderItems = () =>
    this.props.repositories.map(item => (
      <Element key={item.id} element={item} />
    ));
}

export default Elements;

import * as React from 'react';

import { Repository } from '@redux/modules/repositories';

import { Container } from './styles';

interface IProps {
  data: Repository;
}

class Item extends React.Component<IProps, any> {
  public render() {
    return <Container>{this.props.data.name}</Container>;
  }
}

export default Item;

import * as React from 'react';

import { Container } from './styles';

interface IProps {
  data: any;
}

class Item extends React.Component<IProps> {
  public render() {
    return <Container>{this.props.data.name}</Container>;
  }
}

export default Item;

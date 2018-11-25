import * as React from 'react';

import { Link } from '@components/index';
import { Repository } from '@redux/modules/repositories';

import { Container } from './styles';

interface IProps {
  data: Repository;
}

class Item extends React.Component<IProps, any> {
  public render() {
    return (
      <Container>
        <Link href={this.props.data.html_url}>{this.props.data.name}</Link>
      </Container>
    );
  }
}

export default Item;

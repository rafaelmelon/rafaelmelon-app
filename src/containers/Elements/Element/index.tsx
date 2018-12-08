import * as React from 'react';

import { Link } from '@components/index';
import { Repository } from '@redux/modules/repositories';

import { Container } from './styles';

interface IProps {
  element: Repository;
}

class Element extends React.Component<IProps, any> {
  public render() {
    return (
      <Container>
        <Link href={this.props.element.html_url} target={'_blank'}>
          {this.props.element.name}
        </Link>
      </Container>
    );
  }
}

export default Element;

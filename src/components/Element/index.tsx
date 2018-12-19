import * as React from 'react';

import { Repository } from '@redux/modules/repositories';

import { ContainerLink } from './styles';

interface Element {
  element: Repository;
}

class Element extends React.Component<Element, any> {
  public render() {
    return (
      <ContainerLink href={this.props.element.html_url} target={'_blank'}>
        {this.props.element.name}
      </ContainerLink>
    );
  }
}

export default Element;

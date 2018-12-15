import * as React from 'react';

import { Repository } from '@redux/modules/repositories';

import { ContainerLink } from './styles';

interface IProps {
  element: Repository;
}

class Element extends React.Component<IProps, any> {
  public render() {
    return (
      <ContainerLink href={this.props.element.html_url} target={'_blank'}>
        {this.props.element.name}
      </ContainerLink>
    );
  }
}

export default Element;

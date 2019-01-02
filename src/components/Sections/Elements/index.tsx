import * as React from 'react';

import { Element } from '@components/index';

import { Container, ContainerElements } from './styles';

interface ElementsProps {
  repositories: any[];
}

class Elements extends React.Component<ElementsProps> {
  public render() {
    return (
      <Container>
        <ContainerElements>
          {this.props.repositories.map(item => (
            <Element key={item.id} element={item} />
          ))}
        </ContainerElements>
      </Container>
    );
  }
}

export default Elements;

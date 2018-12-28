import * as React from 'react';

import { Repository } from '@redux/modules/repositories';
import { Element } from '@components/index';
import { repositoriesMock } from '@utils/mocks';

import { Container, ContainerElements } from './styles';

interface ElementsProps {
  repositories: Repository[];
}

class Elements extends React.Component<ElementsProps, any> {
  componentDidMount() {
    // this.props.fetchAllRepositories();
  }

  public render() {
    console.log(repositoriesMock);
    return (
      <Container>
        <ContainerElements>
          {repositoriesMock.map(item => (
            <Element key={item.id} element={item} />
          ))}
        </ContainerElements>
      </Container>
    );
  }
}

export default Elements;

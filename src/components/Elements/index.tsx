import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Repository } from '@redux/modules/repositories';
import { Element } from '@components/index';
import { repositoriesMock } from '@utils/mocks';

import { Container, Title } from './styles';

interface ElementsProps {
  repositories: Repository[];
}

class Elements extends React.Component<ElementsProps, any> {
  componentDidMount() {
    //this.props.fetchAllRepositories();
  }

  public render() {
    return (
      <Container>
        <Title>
          <FormattedMessage id="elements.title" />
        </Title>
        {repositoriesMock.map(item => (
          <Element key={item.id} element={item} />
        ))}
      </Container>
    );
  }
}

export default Elements;

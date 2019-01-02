import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Element } from '@components/index';
import { Repository } from '@redux/modules/repositories';

import { Container, ContainerElements, Title } from './styles';

interface ElementsProps {
  repositories: Repository[];
}

class Elements extends React.Component<ElementsProps> {
  public render() {
    const { repositories } = this.props;
    return (
      <Container>
        {repositories && repositories.length > 0 ? (
          <ContainerElements>
            {repositories.map(item => (
              <Element key={item.id} element={item} />
            ))}
          </ContainerElements>
        ) : (
          <Title>
            <FormattedMessage id="elements.empty" />
          </Title>
        )}
      </Container>
    );
  }
}

export default Elements;

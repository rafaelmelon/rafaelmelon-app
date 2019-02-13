import * as React from 'react';
import { FormattedMessage, InjectedIntl, injectIntl } from 'react-intl';

import { Link } from '@components/index';
import { Repository } from '@redux/modules/repositories';

import { Container, Date, Info, Title } from './styles';

interface ElementProps {
  element: Repository;
  intl: InjectedIntl;
}

class Element extends React.Component<ElementProps> {
  public getLastUpdate = date => {
    return this.props.intl.formatDate(date);
  };

  public render() {
    const { element } = this.props;

    return (
      <Container>
        <Title>{element.name}</Title>
        <Date>{this.getLastUpdate(element.updated_at)}</Date>
        <Info>
          {element.homepage && (
            <Link href={element.homepage} target={'_blank'}>
              <FormattedMessage id="elements.landing" />
            </Link>
          )}
          <Link href={element.html_url} target={'_blank'}>
            <FormattedMessage id="elements.repo" />
          </Link>
        </Info>
      </Container>
    );
  }
}

export default injectIntl(Element);

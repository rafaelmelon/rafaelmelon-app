import * as React from 'react';
import { injectIntl, InjectedIntl, FormattedMessage } from 'react-intl';
import { withTheme } from 'styled-components';

import { Link } from '@components/index';
import { Repository } from '@redux/modules/repositories';

import { Container, Title, Info, Date } from './styles';

interface ElementProps {
  element: Repository;
  intl: InjectedIntl;
}

class Element extends React.Component<ElementProps> {
  getLastUpdate = date => {
    const dateFormat = this.props.intl.formatDate(date);
    return dateFormat;
  };

  public render() {
    const { element } = this.props;

    return (
      <Container>
        <Title>{element.name}</Title>
        <Info>
          {element.homepage && (
            <Link href={element.homepage} target={'_blank'}>
              <FormattedMessage id="elements.landing" />
            </Link>
          )}
          <Link href={element.html_url} target={'_blank'}>
            <FormattedMessage id="elements.repo" />
          </Link>
          <Date>{this.getLastUpdate(element.updated_at)}</Date>
        </Info>
      </Container>
    );
  }
}

export default injectIntl(Element);

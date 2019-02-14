import * as React from 'react';
import { FormattedMessage, InjectedIntl, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';

import { github, iconWorld } from '@assets/index';
import { Button, Image, Link } from '@components/index';
import { Repository } from '@redux/modules/repositories';
import { Theme } from '@theme/index';

import { Container, Date, Info, Title } from './styles';

interface ElementProps {
  element: Repository;
  intl: InjectedIntl;
  theme: Theme;
}

class Element extends React.Component<ElementProps> {
  public getLastUpdate = date => {
    return this.props.intl.formatDate(date);
  };

  public render() {
    const { element, theme } = this.props;

    return (
      <Container>
        <Title>{element.name}</Title>
        <Date>{this.getLastUpdate(element.updated_at)}</Date>
        <Info>
          {element.homepage && (
            // <Link href={element.homepage} target={'_blank'}>
            //   <FormattedMessage id="elements.landing" />
            // </Link>
            <Button onClick={() => null} icon={true}>
              <Image src={iconWorld} iconWidth={theme.iconSize.x1} />
            </Button>
          )}
          {/* <Link href={element.html_url} target={'_blank'}>
            <FormattedMessage id="elements.repo" />
          </Link> */}
          <Button onClick={() => null} icon={true}>
            <Image src={github} iconWidth={theme.iconSize.x1} />
          </Button>
        </Info>
      </Container>
    );
  }
}

export default injectIntl(withTheme(Element));

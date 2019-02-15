import * as React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';

import { iconGithub, iconWorld } from '@assets/index';
import { Image, Link } from '@components/index';
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
            <Link href={element.homepage} target={'_blank'} icon={true}>
              <Image src={iconWorld} iconWidth={theme.iconSize.x1} />
            </Link>
          )}
          <Link href={element.html_url} target={'_blank'} icon={true}>
            <Image src={iconGithub} iconWidth={theme.iconSize.x1} />
          </Link>
        </Info>
      </Container>
    );
  }
}

export default injectIntl(withTheme(Element));

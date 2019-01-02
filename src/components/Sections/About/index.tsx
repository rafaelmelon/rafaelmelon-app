import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { withTheme } from 'styled-components';

import { iconArrow } from '@assets/index';
import { Image } from '@components/index';
import { Theme } from '@theme/index';
import { VIEWPORT } from '@utils/index';

import {
  ButtonBottom,
  ColumnOne,
  ColumnTwo,
  Container,
  Grid,
  Text,
  Title,
} from './styles';

interface AboutProps {
  theme: Theme;
  viewport: {
    width: number | null;
    height: number | null;
  };
  onPageSection: (page: number) => any;
}

class About extends React.Component<AboutProps> {
  public onNextPage = () => {
    this.props.onPageSection(2);
  };

  public render() {
    const { theme, viewport } = this.props;
    const isPhone = viewport.width && viewport.width <= VIEWPORT.phone;

    return (
      <Container>
        <Grid>
          <ColumnOne>
            <Text>
              <FormattedMessage id="about.columnone.a" />
            </Text>
            <Text>
              <strong>
                <FormattedMessage id="about.columnone.b" />
              </strong>
            </Text>
            <Text>
              <FormattedMessage id="about.columnone.c" />
            </Text>
          </ColumnOne>
          <ColumnTwo>
            <Title>
              <FormattedMessage id="about.columntwo.title" />
            </Title>
            <Text>
              <FormattedMessage id="about.columntwo.a" />
            </Text>
          </ColumnTwo>
        </Grid>
        {!isPhone && (
          <ButtonBottom onClick={this.onNextPage} icon={true}>
            <Image src={iconArrow} iconWidth={theme.iconSize.x1} />
          </ButtonBottom>
        )}
      </Container>
    );
  }
}

export default withTheme(About);

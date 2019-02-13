import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  Box,
  ColumnOne,
  ColumnTwo,
  Container,
  Grid,
  Text,
  Title,
} from './styles';

class About extends React.Component {
  public render() {
    return (
      <Container>
        <Grid>
          <ColumnOne>
            <Box>
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
            </Box>
          </ColumnOne>
          <ColumnTwo>
            <Box>
              <Title>
                <FormattedMessage id="about.columntwo.title" />
              </Title>
              <Text>
                <FormattedMessage id="about.columntwo.a" />
              </Text>
            </Box>
          </ColumnTwo>
        </Grid>
      </Container>
    );
  }
}

export default About;

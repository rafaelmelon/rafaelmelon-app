import * as React from 'react';

import { Container, CustomTextarea, Error } from './styles';

interface Textarea {
  touched: any;
  error: string;
}

class Textarea extends React.Component<Textarea, any> {
  public render() {
    const { touched, error, ...rest } = this.props;
    return (
      <Container>
        <CustomTextarea {...rest} />
        {touched && error && <Error>{error}</Error>}
      </Container>
    );
  }
}

export default Textarea;

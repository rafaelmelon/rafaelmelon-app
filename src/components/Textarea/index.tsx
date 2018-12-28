import * as React from 'react';

import { Container, CustomTextarea, Error } from './styles';

interface Textarea {
  input: object;
  touched: any;
  error: string;
}

class Textarea extends React.Component<Textarea, any> {
  public render() {
    const { touched, error, input, ...rest } = this.props;
    return (
      <Container>
        <CustomTextarea {...input} {...rest} />
        {touched && error && <Error>{error}</Error>}
      </Container>
    );
  }
}

export default Textarea;

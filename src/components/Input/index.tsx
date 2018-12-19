import * as React from 'react';

import { Container, CustomInput, Error } from './styles';

interface Input {
  touched: any;
  error: string;
}

class Input extends React.Component<Input, any> {
  public render() {
    const { touched, error, ...rest } = this.props;
    return (
      <Container>
        <CustomInput type="text" {...rest} />
        {touched && error && <Error>{error}</Error>}
      </Container>
    );
  }
}

export default Input;

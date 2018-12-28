import * as React from 'react';

import { Container, CustomInput, Error } from './styles';

interface InputProps {
  input: object;
  touched: any;
  error: string;
}

class Input extends React.Component<InputProps> {
  public render() {
    const { touched, error, input, ...rest } = this.props;

    return (
      <Container>
        <CustomInput {...input} type="text" {...rest} />
        {touched && error && <Error>{error}</Error>}
      </Container>
    );
  }
}

export default Input;

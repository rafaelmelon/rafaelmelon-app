import * as React from 'react';

import { CustomInput } from './styles';

interface InputProps {
  input: object;
  meta: {
    touched: any;
    error: string;
  };
}

class Input extends React.Component<InputProps> {
  public render() {
    const {
      input,
      meta: { touched, error },
      ...rest
    } = this.props;

    return (
      <React.Fragment>
        <CustomInput
          type="text"
          error={touched && error}
          {...input}
          {...rest}
        />
      </React.Fragment>
    );
  }
}

export default Input;

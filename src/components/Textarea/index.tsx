import * as React from 'react';

import { CustomTextarea } from './styles';

interface Textarea {
  input: object;
  meta: {
    touched: any;
    error: string;
  };
}

class Textarea extends React.Component<Textarea, any> {
  public render() {
    const {
      input,
      meta: { touched, error },
      ...rest
    } = this.props;

    return (
      <React.Fragment>
        <CustomTextarea error={touched && error} {...input} {...rest} />
      </React.Fragment>
    );
  }
}

export default Textarea;

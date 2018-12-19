import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { CustomButton } from './styles';

interface Button {
  text: string;
  onClick: (event: object) => void;
}

class Button extends React.Component<Button, any> {
  public render() {
    return (
      <CustomButton {...this.props} onClick={this.props.onClick}>
        <FormattedMessage id={this.props.text} />
      </CustomButton>
    );
  }
}

export default Button;

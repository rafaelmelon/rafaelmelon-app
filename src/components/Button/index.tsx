import * as React from 'react';

import { CustomButton } from './styles';

interface Button {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: string;
}

class Button extends React.Component<Button> {
  public render() {
    return (
      <CustomButton {...this.props} onClick={this.props.onClick}>
        {this.props.children}
      </CustomButton>
    );
  }
}

export default Button;

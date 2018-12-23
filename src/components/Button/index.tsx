import * as React from 'react';

import { CustomButton } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: string;
  icon?: boolean;
}

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    icon: false,
  };
  public render() {
    const { children, onClick, ...rest } = this.props;
    return (
      <CustomButton {...rest} onClick={onClick}>
        {children}
      </CustomButton>
    );
  }
}

export default Button;

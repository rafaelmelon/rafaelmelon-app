import * as React from 'react';

import { CustomButton } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: string;
  icon?: boolean;
  disabled?: boolean;
}

class Button extends React.Component<ButtonProps> {
  public static defaultProps = {
    icon: false,
  };
  public render() {
    const { children, disabled, onClick, ...rest } = this.props;

    return (
      <CustomButton {...rest} disabled={disabled} onClick={onClick}>
        {children}
      </CustomButton>
    );
  }
}

export default Button;

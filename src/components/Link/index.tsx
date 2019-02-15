import React, { ReactNode } from 'react';

import { CustomLink, LinkButton } from './styles';

interface Props {
  href: string;
  children: ReactNode;
  target?: string;
  fontSize?: string;
  icon?: boolean;
}

const Link = ({ href, fontSize, icon, children, ...rest }: Props) => {
  if (!icon) {
    return (
      <CustomLink href={href} fontSize={fontSize} {...rest}>
        {children}
      </CustomLink>
    );
  }
  return <LinkButton href={href}>{children}</LinkButton>;
};

export default Link;

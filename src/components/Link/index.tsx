import React, { ReactNode } from 'react';

import { CustomLink } from './styles';

interface Props {
  href: string;
  children: ReactNode;
  target?: string;
  fontSize?: string;
}

const Link = ({ href, fontSize, children, ...rest }: Props) => (
  <CustomLink href={href} fontSize={fontSize} {...rest}>
    {children}
  </CustomLink>
);

export default Link;

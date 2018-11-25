import React, { ReactNode } from 'react';

import { CustomLink } from './styles';

interface Link {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children, ...rest }: Link) => (
  <CustomLink href={href} {...rest}>
    {children}
  </CustomLink>
);

export default Link;

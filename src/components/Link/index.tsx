import React, { ReactNode } from 'react';

import { CustomLink } from './styles';

interface Link {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: Link) => (
  <CustomLink href={href}>{children}</CustomLink>
);

export default Link;

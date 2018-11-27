import React, { ReactNode } from 'react';

import { CustomLink } from './styles';

type Props = {
  href: string;
  children: ReactNode;
  target?: string;
};

const Link = ({ href, children, ...rest }: Props) => (
  <CustomLink href={href} {...rest}>
    {children}
  </CustomLink>
);

export default Link;

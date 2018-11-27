import * as React from 'react';

import { Img } from './styles';

interface Image {
  src: string;
  iconWidth?: string;
}

const Image = ({ src, ...rest }: Image) => <Img src={src} {...rest} />;

export default Image;

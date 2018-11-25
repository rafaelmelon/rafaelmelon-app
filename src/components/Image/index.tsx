import * as React from 'react';

import { CustomImage } from './styles';

interface Image {
  src: string;
}

const Image = ({ src }: Image) => <CustomImage src={src} />;

export default Image;

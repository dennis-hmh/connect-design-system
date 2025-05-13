import React from 'react';
import { Figure, FigureProps } from '../Figure/Figure';
import { Image, ImageProps } from '../Image/Image';

export type SingleImageProps = ImageProps & FigureProps;

export const SingleImage: React.FC<SingleImageProps> = ({ imageSrc, altText, caption, cite }) => {
  return (
    <Figure caption={caption} cite={cite}>
      <Image imageSrc={imageSrc} altText={altText} />
    </Figure>
  );
};

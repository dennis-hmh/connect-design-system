import React from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type ImageProps = {
  imageSrc: string;
  altText: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

const defaultImageSrc =
  import.meta.env.PROD === true && import.meta.env.VITE_ENV === 'build'
    ? '/node_modules/@connect/connect-design-system/dist/images/zelda.jpg'
    : '/images/zelda.jpg';

export const Image: React.FC<ImageProps> = ({ imageSrc, altText, dataTestId }) => {
  return <img src={imageSrc || defaultImageSrc} alt={altText} data-testid={dataTestId} />;
};

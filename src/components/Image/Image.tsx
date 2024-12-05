import React from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type ImageProps = {
  imageSrc: string;
  altText: string;
  roundedCorner?: boolean;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

// const defaultImageSrc = '../../images/zelda.jpg';

const defaultImageSrc =
  import.meta.env.PROD === true && import.meta.env.VITE_ENV !== 'chromatic'
    ? '/node_modules/@connect/connect-design-system/dist/images/zelda.jpg'
    : '/images/zelda.jpg';

export const Image: React.FC<ImageProps> = ({
  imageSrc,
  altText,
  roundedCorner,
  className,
  dataTestId,
}) => {
  const classNames = ['connect__image', roundedCorner && 'connect__rounded-corners', className]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      className={classNames}
      src={imageSrc || defaultImageSrc}
      alt={altText}
      data-testid={dataTestId}
    />
  );
};

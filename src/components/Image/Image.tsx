import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { RoundedCorner } from '../../utils/radius';

export type ImageProps = {
  imageSrc: string;
  altText: string;
  roundedCorners?: RoundedCorner;
  contain?: boolean;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

// const defaultImageSrc =
//   import.meta.env.PROD === true && import.meta.env.VITE_ENV !== 'chromatic'
//     ? '/node_modules/@connect/connect-design-system/dist/images/zelda.jpg'
//     : '/images/zelda.jpg';

const defaultImageSrc = '/images/default.png';

export const Image: React.FC<ImageProps> = ({
  imageSrc,
  altText,
  roundedCorners = false,
  contain,
  className,
  dataTestId,
}) => {
  const getRoundedClasses = (): string => {
    if (typeof roundedCorners === 'boolean') {
      return roundedCorners ? 'connect__rounded-corners' : '';
    }

    const classes: string[] = [];

    if (roundedCorners.topAll) {
      classes.push('connect__rounded-top');
    } else {
      if (roundedCorners.topLeft) classes.push('connect__rounded-top-left');
      if (roundedCorners.topRight) classes.push('connect__rounded-top-right');
    }

    if (roundedCorners.bottomAll) {
      classes.push('connect__rounded-bottom');
    } else {
      if (roundedCorners.bottomLeft) classes.push('connect__rounded-bottom-left');
      if (roundedCorners.bottomRight) classes.push('connect__rounded-bottom-right');
    }

    return classes.join(' ');
  };

  const classNames = [
    'connect__image',
    getRoundedClasses(),
    contain && 'connect__contain',
    className,
  ]
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

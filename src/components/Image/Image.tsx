import React from 'react';
import { useGradeBand } from '../GradeBandContext';
import { GradeBand } from '../../enum/gradeband';

export type ImageProps = {
  imageSrc?: string;
  altText: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
  imageSrcGK2?: string;
  imageSrcG23?: string;
  imageSrcG35?: string;
  imageSrcG45?: string;
  imageSrcG68?: string;
  imageSrcG912?: string;
};

// const defaultImageSrc = '../../images/zelda.jpg';

export const Image: React.FC<ImageProps> = ({ 
  imageSrc, 
  altText, 
  dataTestId,
  imageSrcG23,
  imageSrcG35,
  imageSrcG45,
  imageSrcG68,
  imageSrcG912
}) => {
  const gradeBand = useGradeBand();  // Access the gradeBand via context

  switch (gradeBand) {
    case GradeBand.G2_3:
      imageSrc = imageSrcG23 || 'Default G2-3';
      break;
    case GradeBand.G3_5:
      imageSrc = imageSrcG35 || 'Default G3-5';
      break;
    case GradeBand.G4_5:
      imageSrc = imageSrcG45 || 'Default G4-5';
      break;
    case GradeBand.G6_8:
      imageSrc = imageSrcG68 || 'Default G6-8';
      break;
    case GradeBand.G9_12:
      imageSrc = imageSrcG912 || 'Default G9-12';
      break;
    default:
      imageSrc = '../../images/zelda.jpg';
  }


  return <img src={imageSrc} alt={altText} data-testid={dataTestId} />;
};

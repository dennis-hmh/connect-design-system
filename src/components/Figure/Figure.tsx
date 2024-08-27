import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { FigCaption } from '../FigCaption/FigCaption';

export type FigureProps = {
  imageSrc?: string;
  altText?: string;
  blockquote?: boolean;
  blockquoteText?: string;
  imageCaption?: string;
  cite?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

const defaultImageSrc = '../../images/zelda.jpg';

export function Figure({
  imageSrc,
  altText,
  blockquote,
  blockquoteText,
  imageCaption,
  cite,
  dataTestId,
}: FigureProps) {
  return (
    <figure className="connect__figure" data-testid={dataTestId}>
      {blockquote ? (
        <blockquote>{blockquoteText}</blockquote>
      ) : (
        <img alt={altText} src={imageSrc || defaultImageSrc} />
      )}
      {imageCaption && <FigCaption caption={imageCaption} cite={cite} />}
    </figure>
  );
}

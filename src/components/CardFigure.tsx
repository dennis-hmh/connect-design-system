import React from 'react';

export type CardFigureProps = {
  altText: string;
  imageSrc: string;
  imageCaption?: string;
  dataTestId?: string;
};

export function CardFigure({ altText, imageSrc, imageCaption, dataTestId }: CardFigureProps) {
  return (
    <figure data-testid={dataTestId}>
      <img alt={altText} src={imageSrc} />
      {imageCaption ? <figcaption> {imageCaption} </figcaption> : ''}
    </figure>
  );
}

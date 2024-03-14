import React from 'react';

export type CardFigureProps = {
  altText: string;
  imageSrc: string;
  imageCaption: string;
};

export function CardFigure({ altText, imageSrc, imageCaption }: CardFigureProps) {
  return (
    <figure>
      <img alt={altText} src={imageSrc} />
      {imageCaption ? <figcaption> {imageCaption} </figcaption> : ''}
    </figure>
  );
}

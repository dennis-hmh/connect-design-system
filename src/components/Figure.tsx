import React from 'react';

export type FigureProps = {
  altText: string;
  imageSrc: string;
  imageCaption?: string;
  dataTestId?: string;
};

export function Figure({ altText, imageSrc, imageCaption, dataTestId }: FigureProps) {
  return (
    <figure data-testid={dataTestId}>
      <img alt={altText} src={imageSrc} />
      {imageCaption ? <figcaption> {imageCaption} </figcaption> : ''}
    </figure>
  );
}

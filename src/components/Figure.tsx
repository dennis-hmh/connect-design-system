import React from 'react';

export type FigureProps = {
  altText: string;
  imageSrc: string;
  imageCaption?: string;
  dataTestId?: string;
};

const defaultImageSrc = '../../public/images/zelda.jpg';

export function Figure({ altText, imageSrc, imageCaption, dataTestId }: FigureProps) {
  return (
    <figure className="connect__figure" data-testid={dataTestId}>
      <img alt={altText} src={imageSrc || defaultImageSrc} />
      {imageCaption && <figcaption> {imageCaption} </figcaption>}
    </figure>
  );
}

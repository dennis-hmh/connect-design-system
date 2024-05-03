import React from 'react';
import { CardFigure } from './CardFigure';
import { CardHeader } from './CardHeader';
import { CardMain } from './CardMain';
import { CardFooter } from './CardFooter';
import imageSrc from '../assets/scss/images/zelda.jpeg';

export type CardProps = {
  dataTestId?: string;
};

export function Card({ dataTestId }: CardProps) {
  return (
    <article className="connect__card" data-testid={dataTestId}>
      <CardFigure altText={'Zelda stands on a legde'} imageSrc={imageSrc} imageCaption={'Zelda'} />
      <CardHeader children={'A React Header'} />
      <CardMain children={'Some React Text'} />
      <CardFooter children={'React footer'} />
    </article>
  );
}

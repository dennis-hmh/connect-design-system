import React from 'react';
import { Figure } from '../Figure/Figure';
import { CardHeader } from './CardHeader';
import { CardMain } from './CardMain';
import { CardFooter } from './CardFooter';
import { GradeBand } from 'src/enum/gradeband';

export type CardProps = {
  image: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  headerElement?: keyof React.ReactHTML;
  headerContent?: React.ReactNode;
  mainContent: React.ReactNode;
  footerContent?: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function Card({
  image,
  imageSrc,
  imageAlt,
  imageCaption,
  headerElement,
  headerContent,
  mainContent,
  footerContent,
  dataTestId,
}: CardProps) {
  return (
    <article className="connect__card" data-testid={dataTestId}>
      {image && (
        <Figure
          altText={imageAlt || ''}
          imageSrc={imageSrc || ''}
          imageCaption={imageCaption || ''}
        />
      )}
      <CardHeader headerElement={headerElement}>{headerContent}</CardHeader>
      <CardMain>{mainContent}</CardMain>
      <CardFooter>{footerContent}</CardFooter>
    </article>
  );
}

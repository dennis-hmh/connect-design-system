import React from 'react';
import { Figure, FigureProps } from '../Figure/Figure';
import { CardHeader } from './CardHeader';
import { CardMain } from './CardMain';
import { CardFooter } from './CardFooter';
import { GradeBand } from 'src/enum/gradeband';

export type CardProps = FigureProps & {
  image: boolean;
  headerElement?: keyof React.ReactHTML;
  headerContent?: React.ReactNode;
  mainContent: React.ReactNode;
  footerContent?: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
  children?: React.ReactNode;
};

export function Card({
  image,
  headerElement,
  headerContent,
  mainContent,
  footerContent,
  dataTestId,
  children,
}: CardProps) {
  return (
    <article className="connect__card" data-testid={dataTestId}>
      {image && <Figure>{children}</Figure>}
      <CardHeader headerElement={headerElement}>{headerContent}</CardHeader>
      <CardMain>{mainContent}</CardMain>
      <CardFooter>{footerContent}</CardFooter>
    </article>
  );
}

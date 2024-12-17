import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { FigCaption } from '../FigCaption/FigCaption';

export type FigureProps = {
  children?: React.ReactNode;
  caption?: string;
  cite?: string;
  contain?: boolean;
  dataTestId?: string;
  className?: string;
  gradeBand?: GradeBand;
};

export const Figure: React.FC<FigureProps> = ({ children, caption, cite, className, contain, dataTestId }) => {
  const classNames = ['connect__figure', contain && 'connect__contain', className]
  .filter(Boolean)
  .join(' ');

  return (
    <figure className={classNames} data-testid={dataTestId}>
      {children}
      {(caption || cite) && <FigCaption caption={caption} cite={cite} />}
    </figure>
  );
};

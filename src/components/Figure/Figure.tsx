import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { FigCaption } from '../FigCaption/FigCaption';

export type FigureProps = {
  children?: React.ReactNode;
  caption?: string;
  cite?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Figure: React.FC<FigureProps> = ({ children, caption, cite, dataTestId }) => {
  return (
    <figure className="connect__figure" data-testid={dataTestId}>
      {children}
      {(caption || cite) && <FigCaption caption={caption} cite={cite} />}
    </figure>
  );
};

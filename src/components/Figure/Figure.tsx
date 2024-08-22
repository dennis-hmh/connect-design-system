import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { FigCaption } from '../FigCaption/FigCaption';

export type FigureProps = {
  children?: React.ReactNode;
  imageCaption?: string;
  cite?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Figure: React.FC<FigureProps> = ({ children, imageCaption, cite, dataTestId }) => {
  return (
    <figure className="connect__figure" data-testid={dataTestId}>
      {children}
      {(imageCaption || cite) && <FigCaption caption={imageCaption} cite={cite} />}
    </figure>
  );
};

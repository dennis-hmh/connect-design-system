import React from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type FigCaptionProps = {
  caption?: string;
  cite?: string;
  gradeBand?: GradeBand;
};

export const FigCaption: React.FC<FigCaptionProps> = ({ caption, cite }) => {
  return (
    <figcaption className="connect__figcaption">
      {caption}
      {cite && <cite> {cite}</cite>}
    </figcaption>
  );
};

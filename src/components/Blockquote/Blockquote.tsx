import React from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type BlockquoteProps = {
  children: React.ReactNode;
  gradeBand?: GradeBand | undefined;
};

export const Blockquote: React.FC<BlockquoteProps> = ({ children }) => {
  return <blockquote>{children}</blockquote>;
};

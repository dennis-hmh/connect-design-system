import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { Color } from 'src/utils/colors';

export interface FooterProps {
  children: React.ReactNode;
  gradeBand?: GradeBand;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return <footer>{children}</footer>;
};

import React from 'react';
import { Paper } from '../Paper/Paper';
import { GradeBand } from 'src/enum/gradeband';

export type CardProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Card: React.FC<CardProps> = ({ children, header, footer, dataTestId }) => {
  return (
    <Paper dataTestId={dataTestId} elevation={2} roundedCorner={true}>
      {header && header}
      {children}
      {footer && footer}
    </Paper>
  );
};

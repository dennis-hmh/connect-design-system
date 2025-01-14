import React from 'react';
import { Paper } from '../Paper/Paper';
import { GradeBand } from 'src/enum/gradeband';

export type DialogProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Card: React.FC<DialogProps> = ({ children, header, footer, dataTestId }) => {
  return (
    <Paper dataTestId={dataTestId} elevation={2} roundedCorner={true} element='dialog'>
      {header && header}
      {children}
      {footer && footer}
    </Paper>
  );
};

import React from 'react';
import { GradeBand } from '../../enum/gradeband';

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Divider: React.FC<DividerProps> = ({ orientation, dataTestId }) => {
  return (
    <hr
      className={`connect__divider`}
      aria-orientation={orientation}
      aria-hidden="true"
      data-testid={dataTestId}
    />
  );
};

import React from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type ChipProps = {
  children: React.ReactNode;
  num: string | number;
  totalNum?: string | number;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function Chip({ children, num, totalNum, dataTestId }: ChipProps) {
  return (
    <div className="connect__chip" data-testid={dataTestId}>
      {num} {totalNum ? `/ ${totalNum}` : ''} {children}
    </div>
  );
}

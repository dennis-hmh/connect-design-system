import React from 'react';

export type ChipProps = {
  children: React.ReactNode;
  num: string | number;
  totalNum?: string | number;
  dataTestId?: string;
};

export function Chip({ children, num, totalNum, dataTestId }: ChipProps) {
  return (
    <div className="connect__chip" data-testid={dataTestId}>
      {num} {totalNum ? `/ ${totalNum}` : ''} {children}
    </div>
  );
}

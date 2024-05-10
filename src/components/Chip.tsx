import React from 'react';

export type ChipProps = {
  children: React.ReactNode;
  num: string | number;
  totalNum?: string | number;
};

export function Chip({ children, num, totalNum }: ChipProps) {
  return (
    <div className="connect__chip">
      {num} {totalNum ? `/ ${totalNum}` : ''} {children}
    </div>
  );
}

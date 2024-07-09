import React from 'react';
import { Typography } from '../Typography/Typography';

type ValidElementTag = keyof JSX.IntrinsicElements;

export type CardHeaderProps = {
  headerElement?: ValidElementTag;
  children: React.ReactNode;
};

export function CardHeader({ headerElement, children }: CardHeaderProps) {
  return (
    <header className="connect__card-header">
      <Typography element={headerElement}>{children}</Typography>
    </header>
  );
}

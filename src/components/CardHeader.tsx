import React from 'react';

export type HeaderProps = {
  children: React.ReactNode;
};

export function CardHeader({ children }: HeaderProps) {
  return (
    <header>
      <h2> {children} </h2>
    </header>
  );
}

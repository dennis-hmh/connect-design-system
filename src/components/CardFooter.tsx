import React from 'react';

export type FooterProps = {
  children: React.ReactNode;
};

export function CardFooter({ children }: FooterProps) {
  return <footer>{children}</footer>;
}

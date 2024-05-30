import React from 'react';

export type FooterProps = {
  children: React.ReactNode;
};

export function CardFooter({ children }: FooterProps) {
  return <footer className="connect__card-footer">{children}</footer>;
}

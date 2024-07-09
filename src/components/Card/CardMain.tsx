import React from 'react';

export type CardMainProp = {
  children: React.ReactNode;
};

export function CardMain({ children }: CardMainProp) {
  return <div className="connect__card-content">{children}</div>;
}

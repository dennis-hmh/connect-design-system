import React from 'react';

export type HintProps = {
  children: React.ReactNode;
  dataTestId?: string;
};

export const Hint: React.FC<HintProps> = ({ children, dataTestId }) => {
  return (
    <span className="connect__hint" aria-hidden="true" data-testid={dataTestId}>
      {children}
    </span>
  );
};

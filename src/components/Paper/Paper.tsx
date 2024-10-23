import React from 'react';
import { GradeBand } from '../../enum/gradeband';

export type PaperProps = {
  children: React.ReactNode;
  element?: section | article | main | aside | div;
  roundedCorner?: boolean;
  outlined?: boolean;
  className?: string;
  elevation?: number;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Paper: React.FC<PaperProps> = ({
  children,
  element: Component = 'div',
  roundedCorner,
  outlined,
  className,
  elevation,
  dataTestId,
}) => {
  return (
    <Component
      className={`connect__paper ${roundedCorner ? 'connect__paper-rounded' : ''} ${outlined ? 'connect__paper-outlined' : ''} ${className ? className : ''}`}
      data-testid={dataTestId}
    >
      {children}
    </Component>
  );
};

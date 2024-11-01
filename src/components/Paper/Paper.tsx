import React from 'react';
import { GradeBand } from '../../enum/gradeband';

export type PaperProps = {
  children: React.ReactNode;
  element?: 'section' | 'article' | 'main' | 'aside' | 'div';
  elevation?: 0 | 1 | 2;
  roundedCorner?: boolean;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Paper: React.FC<PaperProps> = ({
  children,
  element: Component = 'div',
  elevation,
  roundedCorner = false,
  className,
  dataTestId,
}) => {
  const paperClassName = [
    'connect__paper',
    elevation !== undefined ? `connect__elevation-${elevation}` : '',
    roundedCorner ? '' : 'connect__rounded-off',
    className ? className : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={paperClassName} data-testid={dataTestId}>
      {children}
    </Component>
  );
};

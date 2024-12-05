import React from 'react';
import { GradeBand } from '../../enum/gradeband';
import { Color } from '../../utils/colors';

export type PaperProps = {
  children: React.ReactNode;
  id?: string;
  element?: 'section' | 'article' | 'main' | 'aside' | 'div';
  elevation?: -1 | 0 | 1 | 2 | 3;
  roundedCorner?: boolean;
  backgroundColor?: Color;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Paper: React.FC<PaperProps> = ({
  children,
  id,
  element: Component = 'div',
  elevation,
  roundedCorner = false,
  backgroundColor = '--connect__white',
  className,
  dataTestId,
}) => {
  const paperClassName = [
    'connect__paper',
    elevation !== undefined ? `connect__elevation-${elevation}` : '',
    roundedCorner ? 'connect__rounded-corners' : '',
    className ? className : '',
  ]
    .filter(Boolean)
    .join(' ');

  let paperProps: React.CSSProperties = {};

  if (backgroundColor) {
    paperProps = {
      '--connect__paper-bg': `var(${backgroundColor})`,
    } as React.CSSProperties;
  }

  return (
    <Component id={id} className={paperClassName} data-testid={dataTestId} style={paperProps}>
      {children}
    </Component>
  );
};

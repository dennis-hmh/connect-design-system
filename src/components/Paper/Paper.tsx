import React from 'react';
import { GradeBand } from '../../enum/gradeband';
import { Color } from '../../utils/colors';

export type PaperProps = {
  children: React.ReactNode;
  element?: 'section' | 'article' | 'main' | 'aside' | 'div' | 'dialog' | 'header' ;
  elevation?: -1 | 0 | 1 | 2 | 3;
  roundedCorner?: boolean;
  backgroundColor?: Color;
  className?: string;
  fullWidth?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Paper: React.FC<PaperProps> = ({
  children,
  element: Component = 'div',
  elevation,
  roundedCorner = false,
  backgroundColor = '--connect__white',
  className,
  fullWidth = false,
  dataTestId,
}) => {
  const paperClassName = [
    'connect__paper',
    elevation !== undefined ? `connect__elevation-${elevation}` : '',
    roundedCorner ? 'connect__rounded-corners' : '',
    fullWidth ? 'connect__full-width' : '',
    className ? className : '',
  ]
    .filter(Boolean)
    .join(' ');

  let paperProps: React.CSSProperties = {};

  if (backgroundColor) {
    paperProps = {
      '--connect__paper-bg': `var(--connect__${backgroundColor})`,
    } as React.CSSProperties;
  }

  return (
    <Component className={paperClassName} data-testid={dataTestId} style={paperProps}>
      {children}
    </Component>
  );
};

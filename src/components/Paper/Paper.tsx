import React from 'react';
import { GradeBand } from '../../enum/gradeband';
import { Color } from '../../utils/colors';
import { RoundedCorner } from '../../utils/radius';

export type PaperProps = {
  children: React.ReactNode;
  element?: 'section' | 'article' | 'main' | 'aside' | 'div' | 'dialog';
  id?: string;
  elevation?: -2 | 0 | 2 | 4 | 6;
  roundedCorner?: RoundedCorner;
  backgroundColor?: Color;
  className?: string;
  fullWidth?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Paper: React.FC<PaperProps> = ({
  children,
  element: Component = 'div',
  id,
  elevation,
  roundedCorner = false,
  backgroundColor = 'white',
  className,
  fullWidth = false,
  dataTestId,
}) => {
  const getRoundedClasses = (): string => {
    if (typeof roundedCorner === 'boolean') {
      return roundedCorner ? 'connect__rounded-corners' : 'connect__rounded-reset';
    }

    const classes: string[] = [];

    if (roundedCorner.topAll) {
      classes.push('connect__rounded-top');
    } else {
      if (roundedCorner.topLeft) classes.push('connect__rounded-top-left');
      if (roundedCorner.topRight) classes.push('connect__rounded-top-right');
    }

    if (roundedCorner.bottomAll) {
      classes.push('connect__rounded-bottom');
    } else {
      if (roundedCorner.bottomLeft) classes.push('connect__rounded-bottom-left');
      if (roundedCorner.bottomRight) classes.push('connect__rounded-bottom-right');
    }

    return classes.length ? classes.join(' ') : 'connect__rounded-reset';
  };

  const paperClassName = [
    'connect__paper',
    elevation !== undefined ? `connect__elevation-${elevation}` : '',
    getRoundedClasses(),
    fullWidth ? 'connect__full-width' : '',
    className || '',
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
    <Component id={id} className={paperClassName} data-testid={dataTestId} style={paperProps}>
      {children}
    </Component>
  );
};

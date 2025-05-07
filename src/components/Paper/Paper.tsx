import React from 'react';
import { GradeBand } from '../../enum/gradeband';
import { Color } from '../../utils/colors';
import { RoundedCorner } from '../../utils/radius';

export type PaperProps = {
  ariaHidden?: boolean;
  children: React.ReactNode;
  element?: React.ElementType;
  id?: string;
  inert?: boolean;
  elevation?: -2 | 0 | 2 | 4 | 6;
  roundedCorner?: RoundedCorner;
  outline?: Color;
  backgroundColor?: Color;
  className?: string;
  role?: string;
  fullWidth?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Paper: React.FC<PaperProps> = ({
  ariaHidden,
  children,
  element: Component = 'div',
  id,
  inert,
  elevation,
  roundedCorner,
  outline = 'transparent',
  backgroundColor = 'white',
  className,
  role,
  fullWidth = false,
  dataTestId,
}) => {
  const getRoundedClasses = (): string => {
    if (roundedCorner === undefined) {
      return '';
    }

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

    return classes.join(' ') || 'connect__rounded-reset';
  };

  const paperClassName = [
    'connect__paper',
    elevation !== undefined ? `connect__elevation-${elevation}` : '',
    getRoundedClasses(),
    outline !== 'transparent' ? 'connect__paper-outlined' : '',
    fullWidth ? 'connect__full-width' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  let paperProps: React.CSSProperties = {};

  if (backgroundColor) {
    paperProps = {
      '--connect__paper-bg': `var(--connect__${backgroundColor})`,
      '--connect__inner-status-paper-color': `var(--connect__${outline})`,
    } as React.CSSProperties;
  }

  const inertAttribute = inert ? { inert: '' } : {};

  return (
    <Component
      id={id}
      aria-hidden={ariaHidden}
      className={paperClassName}
      data-testid={dataTestId}
      style={paperProps}
      role={role}
      {...inertAttribute}
    >
      {children}
    </Component>
  );
};

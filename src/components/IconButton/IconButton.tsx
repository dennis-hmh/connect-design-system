import React from 'react';
import { Color } from 'src/utils/colors';
import { SemanticColorToken } from 'src/utils/new-colors';
import { GradeBand } from '../../enum/gradeband';

export type IconButtonProps = {
  children: React.ReactNode;
  id?: string;
  classes?: string;
  clickedClass?: string;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'sm' | 'md';
  color?: SemanticColorToken;
  backgroundColor?: Color;
  ariaLabel?: string;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  id,
  classes,
  clickedClass,
  variant,
  size,
  color,
  backgroundColor,
  ariaLabel,
  title,
  disabled = false,
  loading = false,
  onClick,
  dataTestId,
}) => {
  const classNames = [
    'connect__button',
    'connect__button-icon',
    variant && `connect__button-${variant}`,
    color && `connect__button-${color}`,
    size === 'sm' && 'connect__button-small',
    disabled && 'connect__disabled',
    loading && 'connect__loading',
    clickedClass && clickedClass,
    classes,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      id={id}
      className={classNames}
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      disabled={disabled}
      data-testid={dataTestId}
      style={
        backgroundColor
          ? ({ '--variant__btn-bg': `var(--connect__${backgroundColor})` } as React.CSSProperties)
          : undefined
      }
      type="button"
    >
      {children}
    </button>
  );
};

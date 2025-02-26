import React from 'react';
import { Color } from '../../utils/colors';
import { GradeBand } from '../../enum/gradeband';

export type IconButtonProps = {
  children: React.ReactNode;
  classes?: string;
  backgroundColor?: Color;
  ariaLabel?: string;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  handleClick?: () => void;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  classes,
  backgroundColor,
  ariaLabel,
  title,
  disabled = false,
  loading = false,
  handleClick,
  dataTestId,
}) => {
  const classNames = [
    'connect__button',
    'connect__button-icon',
    disabled && 'connect__disabled',
    loading && 'connect__loading',
    classes,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      onClick={handleClick}
      aria-label={ariaLabel}
      title={title}
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

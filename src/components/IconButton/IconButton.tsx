import React from 'react';
import { Color } from 'src/utils/colors';
import { SemanticColorToken } from 'src/utils/new-colors';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { GradeBand } from '../../enum/gradeband';

export type IconButtonProps = {
  children: React.ReactNode;
  id?: string;
  classes?: string;
  clickedClass?: string;
  color?: SemanticColorToken;
  rounded?: boolean;
  backgroundColor?: Color;
  clickHandler?: () => void;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const IconButton: React.FC<ButtonBaseProps & IconButtonProps> = ({
  children,
  id,
  classes,
  clickedClass,
  state,
  rounded,
  variant,
  size,
  color,
  backgroundColor,
  ariaLabel,
  title,
  disabled = false,
  clickHandler,
  dataTestId,
}) => {
  const classNames = [
    'connect__button',
    'connect__button-icon',
    variant && `connect__button-${variant}`,
    color && `connect__button-${color}`,
    state && `connect__button-${state}`,
    rounded && 'connect__button-rounded',
    size === 'sm' && 'connect__button-small',
    disabled && 'connect__disabled',
    clickedClass && clickedClass,
    classes,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      id={id}
      className={classNames}
      onClick={clickHandler}
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

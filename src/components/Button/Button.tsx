import React from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

// Define the old button props
export type OldButtonProps = {
  children: React.ReactNode;
  primary?: boolean; // Optional for backward compatibility
  title?: string;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  submit?: 'button' | 'submit'; // Allow submit type
  clickHandler?: () => void;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  iconPosition?: 'before' | 'after';
  iconOpacity?: number | undefined;
  ariaLabel?: string;
  dataTestId?: string;
  additionalClass?: string;
  gradeBand?: GradeBand;
};

// Define the new button props
export type NewButtonProps = {
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'large';
  startIcon?: IconId;
  endIcon?: IconId;
};

// Combine old and new props
export type ButtonProps = OldButtonProps & NewButtonProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  title,
  disabled = false,
  correct,
  incorrect,
  submit = 'button',
  clickHandler,
  iconId,
  iconSize = 'md',
  fill,
  iconPosition = 'before',
  iconOpacity,
  ariaLabel,
  dataTestId,
  additionalClass = '',
  variant,
  color,
  size,
  startIcon,
  endIcon,
}) => {
  const classNames = [
    'connect__button',
    primary && 'connect__button-primary',
    !primary && 'connect__button-secondary',
    correct && 'connect__button-correct',
    incorrect && 'connect__button-incorrect',
    additionalClass,
    variant === 'contained' && 'connect__button-contained',
    variant === 'outlined' && 'connect__button-outlined',
    size === 'small' && 'connect__button-small',
    color && `connect__button-${color}`,
  ]
    .filter(Boolean)
    .join(' ');

  // Determine the icon ID to use
  const iconToUse = iconId || startIcon || endIcon;

  const iconElement = iconToUse ? (
    <Icon
      id={iconToUse} // This will now always be defined
      size={iconSize}
      fill={fill}
      opacity={iconOpacity}
    />
  ) : null;

  return (
    <button
      type={submit}
      className={classNames}
      onClick={clickHandler}
      disabled={disabled}
      data-testid={dataTestId}
      aria-label={ariaLabel || (iconId && !children ? `Icon button ${iconId}` : undefined)}
      title={title ? title : ariaLabel}
    >
      {iconPosition === 'before' && iconElement}
      {children}
      {iconPosition === 'after' && iconElement}
    </button>
  );
};

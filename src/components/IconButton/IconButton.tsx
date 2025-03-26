import React from 'react';
import { SemanticColorToken } from 'src/utils/new-colors';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';

export type IconButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  clickedClass?: string;
  color?: SemanticColorToken;
  rounded?: boolean;
};

export const IconButton: React.FC<ButtonBaseProps & IconButtonProps> = ({
  children,
  ariaLabel,
  id,
  classes,
  clickedClass,
  color,
  rounded,
  variant,
  state,
  size,
  title,
  onClick,
  disabled = false,
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
    clickedClass,
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
      type="button"
    >
      {children}
    </button>
  );
};

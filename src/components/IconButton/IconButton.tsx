import React from 'react';
import { SemanticColorToken } from 'src/utils/new-colors';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { GradeBand } from '../../enum/gradeband';

export type IconButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  id?: string;
  classes?: string;
  clickedClass?: string;
  color?: SemanticColorToken;
  rounded?: boolean;
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
    clickedClass,
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
      type="button"
    >
      {children}
    </button>
  );
};

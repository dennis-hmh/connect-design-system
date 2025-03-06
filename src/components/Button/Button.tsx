import React from 'react';
import { SemanticColorToken } from '../../utils/new-colors';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { GradeBand } from 'src/enum/gradeband';

// Define props specific to the new button implementation
type ButtonSpecificProps = {
  variant?: 'text' | 'contained' | 'outlined';
  color?: SemanticColorToken; // Updated to use semantic colors
  size?: 'sm' | 'lg';
  disableElevation?: boolean;
  fullWidth?: boolean;
  gradeBand?: GradeBand;
};

export type ButtonProps = ButtonBaseProps & ButtonSpecificProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  color,
  size,
  disableElevation = false,
  fullWidth = false,
  onClick,
  disabled,
  type,
  ariaLabel,
  title,
  dataTestId,
  classes,
  ...props
}) => {
  const classNames = [
    'connect__button',
    variant && `connect__button-${variant}`,
    color && `connect__button-${color}`,
    size === 'sm' && 'connect__button-small',
    disableElevation && 'connect__button-no-elevation',
    fullWidth && 'connect__button-full-width',
    classes,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ButtonBase
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      type={type}
      ariaLabel={ariaLabel}
      title={title}
      dataTestId={dataTestId}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

Button.displayName = 'Button';

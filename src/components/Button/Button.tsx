import React from 'react';
import { SemanticColorToken } from '../../utils/new-colors';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { GradeBand } from 'src/enum/gradeband';

// Define props specific to the new button implementation
type ButtonSpecificProps = {
  variant?: 'text' | 'contained' | 'outlined';
  color?: SemanticColorToken;
  size?: 'sm' | 'lg';
  disableElevation?: boolean;
  fullWidth?: boolean;
  iconOpacity?: number;
  gradeBand?: GradeBand;
  /**
   * @deprecated Use `variant` and `color` prop instead.
   */
  primary?: boolean;
  /**
   * @deprecated Use `onClick` prop instead.
   */
  clickHandler?: () => void;
  /**
   * @deprecated Use `classes` prop instead.
   */
  additionalClasses?: string;
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
  primary, // Deprecated
  clickHandler, // Deprecated
  additionalClasses, // Deprecated
  ...props
}) => {
  const classNames = [
    'connect__button',
    variant && `connect__button-${variant}`,
    color && `connect__button-${color}`,
    size === 'sm' && 'connect__button-small',
    disableElevation && 'connect__button-no-elevation',
    fullWidth && 'connect__button-full-width',
    primary && `connect__button-primary`, // Deprecated
    !primary && `connect__button-secondary connect__button-outlined`, // Deprecated
    additionalClasses, // Deprecated
    classes,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ButtonBase
      classes={classNames || additionalClasses}
      onClick={onClick || clickHandler}
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

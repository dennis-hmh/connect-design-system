import React from 'react';
import { Icon } from '../Icon/Icon'; // Deprecated
import { IconId } from '../../utils/icon-list'; // Deprecated
import { Color } from '../../utils/colors'; //Deprecated
import { ButtonBase, ButtonBaseProps } from '../ButtonBase/ButtonBase';

// Existin props no part of ButtonBase. To be removed in v2.0.0.
type ExistingButtonProps = {
  /**
   * @deprecated Use `variant` and `color` prop instead.
   */
  primary?: boolean;
  /**
   * @deprecated Use `variant` and `color` prop instead.
   */
  correct?: boolean;
  /**
   * @deprecated Use `variant` and `color` prop instead.
   */
  incorrect?: boolean;
  /**
   * @deprecated To be removed in v2.0.0.
   */
  submit?: 'button' | 'submit';
  /**
   * @deprecated Use `onClick` prop instead.
   */
  clickHandler?: () => void;
  /**
   * @deprecated Use <Icon> component instead.
   */
  iconId?: IconId;
  /**
   * @deprecated Use <Icon> component instead.
   */
  iconSize?: 'unset' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * @deprecated Use <Icon> component instead.
   */
  fill?: Color;
  /**
   * @deprecated Use <Icon> component instead.
   */
  iconPosition?: 'before' | 'after';
  /**
   * @deprecated Use <Icon> component instead.
   */
  iconOpacity?: number | undefined;
  /**
   * @deprecated Use `classes` prop instead.
   */
  additionalClasses?: string;
  /**
   * @deprecated To be removed in v2.0.0.
   */
  mediaButton?: boolean;
};

// Define props specific to the new button implementation
type SpecificButtonProps = {
  fullWidth?: boolean;
};

export type ButtonProps = ButtonBaseProps & SpecificButtonProps & ExistingButtonProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  onClick,
  disabled,
  type,
  ariaLabel,
  dataTestId,
  classes,
  // To be removed in v2.0.0
  primary, // Deprecated
  clickHandler, // Deprecated
  additionalClasses, // Deprecated
  correct, // Deprecated
  incorrect, // Deprecated
  mediaButton, // Deprecated
  iconId, // Deprecated
  iconSize = 'md', // Deprecated
  fill, // Deprecated
  iconPosition, // Deprecated
  iconOpacity, // Deprecated
  ...props
}) => {
  const classNames = [
    fullWidth && 'connect__button-full-width',
    classes,

    // // To be removed in v2.0.0
    primary !== undefined
      ? primary
        ? 'connect__button-primary connect__button-contained'
        : 'connect__button-primary connect__button-outlined'
      : '', // Deprecated

    correct && 'connect__button-positive', // Deprecated
    incorrect && 'connect__button-negative', // Deprecated
    mediaButton && 'connect__button-media', // Deprecated
    additionalClasses, // Deprecated
  ]
    .filter(Boolean)
    .join(' ');

  const iconElement = iconId ? (
    <Icon id={iconId} size={iconSize} fill={fill} opacity={iconOpacity} />
  ) : null; // Deprecated

  return (
    <ButtonBase
      classes={classNames || additionalClasses}
      onClick={onClick || clickHandler}
      disabled={disabled}
      type={type}
      ariaLabel={ariaLabel}
      dataTestId={dataTestId}
      {...props}
    >
      {iconPosition === 'before' && iconElement /* Deprecated */}
      {children}
      {iconPosition === 'after' && iconElement /* Deprecated */}
    </ButtonBase>
  );
};

Button.displayName = 'Button';

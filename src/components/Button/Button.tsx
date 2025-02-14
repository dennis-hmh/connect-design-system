import React from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { ButtonBase, ButtonBaseProps } from './ButtonBase';

// Define props specific to the old button implementation
type OldButtonSpecificProps = {
  primary?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  clickHandler?: () => void;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  iconPosition?: 'before' | 'after';
  iconOpacity?: number;
  additionalClass?: string;
};

// Define props specific to the new button implementation
type NewButtonSpecificProps = {
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'large';
  startIcon?: IconId;
  endIcon?: IconId;
  // New MUI-like props
  disableElevation?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  loadingIndicator?: React.ReactNode;
  loadingPosition?: 'center' | 'end' | 'start';
};

// Combine with ButtonBaseProps
export type OldButtonProps = ButtonBaseProps & OldButtonSpecificProps;
export type NewButtonProps = ButtonBaseProps & NewButtonSpecificProps;
export type ButtonProps = OldButtonProps & NewButtonProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  title,
  disabled = false,
  correct,
  incorrect,
  type = 'button',
  clickHandler,
  iconId,
  iconSize = 'md',
  fill,
  iconPosition = 'before',
  iconOpacity,
  ariaLabel,
  dataTestId,
  additionalClass = '',
  // New props
  variant,
  color,
  size,
  startIcon,
  endIcon,
  disableElevation = false,
  fullWidth = false,
  loading = false,
  loadingIndicator,
  loadingPosition = 'center',
  // ButtonBase props
  className,
  onFocusVisible,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseLeave,
  tabIndex,
  component,
  ariaDescribedby,
  ariaLabelledby,
  ariaHidden,
  ariaExpanded,
  ariaControls,
  ariaPressed,
  gradeBand,
  role,
  autoFocus,
  ...other
}) => {
  const classNames = [
    'connect__button',
    // Only add primary/secondary classes if variant is not specified
    !variant && (primary ? 'connect__button-primary' : 'connect__button-secondary'),
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    additionalClass,
    // New variant and color classes
    variant === 'contained' && 'connect__button-contained',
    variant === 'outlined' && 'connect__button-outlined',
    variant === 'text' && 'connect__button-text',
    // Only add color class if it's different from primary/secondary
    color && color !== 'primary' && color !== 'secondary' && `connect__button-${color}`,
    size === 'small' && 'connect__button-small',
    disableElevation && 'connect__button-no-elevation',
    fullWidth && 'connect__button-full-width',
    loading && 'connect__button-loading',
    loading && loadingPosition && `connect__button-loading-${loadingPosition}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Determine the icon ID to use
  const iconToUse = iconId || startIcon || endIcon;

  const iconElement = iconToUse ? (
    <Icon id={iconToUse} size={iconSize} fill={fill} opacity={iconOpacity} />
  ) : null;

  const loadingElement = loadingIndicator || (
    <Icon
      id="loader"
      size={iconSize || 'md'}
      fill={fill}
      opacity={iconOpacity}
      className="connect__button-loading-indicator"
    />
  );

  const renderChildren = () => {
    if (!loading) {
      if (startIcon || endIcon) {
        return (
          <>
            {startIcon && <Icon id={startIcon} size={iconSize} fill={fill} opacity={iconOpacity} />}
            {children}
            {endIcon && <Icon id={endIcon} size={iconSize} fill={fill} opacity={iconOpacity} />}
          </>
        );
      }

      return (
        <>
          {iconPosition === 'before' && iconElement}
          {children}
          {iconPosition === 'after' && iconElement}
        </>
      );
    }

    switch (loadingPosition) {
      case 'start':
        return (
          <>
            {loadingElement}
            {children}
          </>
        );
      case 'end':
        return (
          <>
            {children}
            {loadingElement}
          </>
        );
      default:
        return loadingElement;
    }
  };

  return (
    <ButtonBase
      className={classNames}
      onClick={clickHandler}
      disabled={disabled || loading}
      type={type}
      dataTestId={dataTestId}
      ariaLabel={ariaLabel || (iconId && !children ? `Icon button ${iconId}` : undefined)}
      title={title}
      onFocusVisible={onFocusVisible}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      tabIndex={tabIndex}
      component={component}
      ariaDescribedby={ariaDescribedby}
      ariaLabelledby={ariaLabelledby}
      ariaHidden={ariaHidden}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      ariaPressed={ariaPressed}
      gradeBand={gradeBand}
      role={role}
      autoFocus={autoFocus}
      {...other}
    >
      {renderChildren()}
    </ButtonBase>
  );
};

Button.displayName = 'Button';

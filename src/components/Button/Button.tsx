import React from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { ColorToken, SemanticColorToken } from '../../utils/new-colors';
import { ButtonBase, ButtonBaseProps } from './ButtonBase';

// Define props specific to the old button implementation
type OldButtonSpecificProps = {
  primary?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  clickHandler?: () => void;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: ColorToken | SemanticColorToken; // Updated to use new color system
  iconPosition?: 'before' | 'after';
  iconOpacity?: number;
  additionalClass?: string;
};

// Define props specific to the new button implementation
type NewButtonSpecificProps = {
  variant?: 'text' | 'contained' | 'outlined';
  color?: SemanticColorToken; // Updated to use semantic colors
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
  ...other
}) => {
  const classNames = [
    'connect__button',
    // Variant classes
    variant && `connect__button-${variant}`,
    // Color classes - use semantic colors or fallback to primary/secondary
    !variant && (primary ? 'connect__button-primary' : 'connect__button-secondary'),
    color && `connect__button-${color}`,
    // State classes
    correct && 'connect__button-correct',
    incorrect && 'connect__button-incorrect',
    // Size and modifier classes
    size === 'small' && 'connect__button-small',
    disableElevation && 'connect__button-no-elevation',
    fullWidth && 'connect__button-full-width',
    loading && 'connect__button-loading',
    loading && loadingPosition && `connect__button-loading-${loadingPosition}`,
    // Additional classes
    additionalClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const convertToIconFill = (fill?: ColorToken | SemanticColorToken): string | undefined => {
    if (!fill) return undefined;
    return `var(--connect__color-${fill})`; // This assumes your CSS variables follow this pattern
  };

  // Determine the icon ID to use
  const iconToUse = iconId || startIcon || endIcon;

  const iconElement = iconToUse ? (
    <Icon id={iconToUse} size={iconSize} fill={convertToIconFill(fill)} opacity={iconOpacity} />
  ) : null;

  const loadingElement = loadingIndicator || (
    <Icon
      id="loader"
      size={iconSize || 'md'}
      fill={convertToIconFill(fill)}
      opacity={iconOpacity}
      className="connect__button-loading-indicator"
    />
  );

  const renderChildren = () => {
    if (!loading) {
      if (startIcon || endIcon) {
        return (
          <>
            {startIcon && (
              <Icon
                id={startIcon}
                size={iconSize}
                fill={convertToIconFill(fill)}
                opacity={iconOpacity}
              />
            )}
            {children}
            {endIcon && (
              <Icon
                id={endIcon}
                size={iconSize}
                fill={convertToIconFill(fill)}
                opacity={iconOpacity}
              />
            )}
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
      {...other}
    >
      {renderChildren()}
    </ButtonBase>
  );
};

Button.displayName = 'Button';

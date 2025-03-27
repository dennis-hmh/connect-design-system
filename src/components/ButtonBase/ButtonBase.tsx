import React from 'react';
import { SemanticColorToken } from 'src/utils/new-colors';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonBaseProps = {
  children?: React.ReactNode;
  id?: string;
  classes?: string;
  variant?: 'text' | 'contained' | 'outlined' | 'plain' | 'frameless';
  state?: 'activated' | 'visited';
  color?: SemanticColorToken;
  disableElevation?: boolean;
  size?: 'sm' | 'md';
  disabled?: boolean;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocusVisible?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  component?: React.ElementType;
  dataTestId?: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  ariaHidden?: boolean;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaPressed?: boolean;
  role?: string;
  autoFocus?: boolean;
  gradeBand?: GradeBand;
};

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  id,
  classes,
  variant,
  state,
  color,
  size = 'md',
  disableElevation = false,
  disabled = false,
  title,
  onClick,
  onFocusVisible,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseLeave,
  type = 'button',
  tabIndex,
  component: Component = 'button',
  dataTestId,
  ariaLabel,
  ariaDescribedby,
  ariaLabelledby,
  ariaHidden,
  ariaExpanded,
  ariaControls,
  ariaPressed,
  role,
  autoFocus,
  ...props
}) => {
  const buttonClasses = [
    'connect__button',
    variant && `connect__button-${variant}`,
    state && `connect__button-${state}`,
    color && `connect__button-${color}`,
    disabled && 'connect__button-disabled',
    size === 'sm' && 'connect__button-small',
    disableElevation && 'connect__button-no-elevation',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      id={id}
      className={`${buttonClasses} ${classes}`}
      disabled={Component === 'button' ? disabled : undefined}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onFocus={onFocusVisible}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseDown={disabled ? undefined : onMouseDown}
      onMouseLeave={onMouseLeave}
      type={Component === 'button' ? type : undefined}
      tabIndex={disabled ? -1 : tabIndex}
      data-testid={dataTestId}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      aria-hidden={ariaHidden}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-pressed={ariaPressed}
      title={title}
      role={role}
      autoFocus={autoFocus}
      {...props}
    >
      {children}
    </Component>
  );
};

ButtonBase.displayName = 'ButtonBase';

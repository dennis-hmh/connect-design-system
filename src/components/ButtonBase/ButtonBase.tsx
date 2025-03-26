import React from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonBaseProps = {
  children?: React.ReactNode;
  id?: string;
  classes?: string;
  variant?: 'text' | 'contained' | 'outlined' | 'plain';
  state?: 'activated' | 'visited';
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
  size?: 'sm' | 'md';
  role?: string;
  autoFocus?: boolean;
  gradeBand?: GradeBand;
};

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  id,
  classes,
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
  return (
    <Component
      id={id}
      className={classes}
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

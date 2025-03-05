import React from 'react';
import { ButtonBaseProps } from '../Button/ButtonBase';
import { GradeBand } from 'src/enum/gradeband';
import { SemanticColorToken } from '../../utils/new-colors';
import { Stack } from '../Stack/Stack';

export type ButtonGroupSpecificProps = {
  variant?: 'text' | 'contained' | 'outlined';
  color?: SemanticColorToken; // Updated to use semantic colors
  size?: 'sm' | 'lg';
  disableElevation?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  gradeBand?: GradeBand;
};

export type ButtonGroupProps = ButtonBaseProps & ButtonGroupSpecificProps;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  variant,
  color,
  size,
  disableElevation = false,
  fullWidth = false,
  disabled,
  orientation = 'horizontal',
  ariaLabel,
  dataTestId,
  classes,
  ...other
}) => {
  const classNames = [
    'connect__button-group',
    variant && `connect__button-${variant}`,
    color && `connect__button-${color}`,
    size === 'sm' && 'connect__button-small',
    disableElevation && 'connect__button-no-elevation',
    fullWidth && 'connect__button-full-width',
    orientation === 'horizontal' && 'connect__button-group-horizontal',
    orientation === 'vertical' && 'connect__button-group-vertical',
    disabled && 'connect__disabled',
    classes,
  ]
    .filter(Boolean)
    .join(' ');

  const clonedChildren = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          variant,
          color,
          size,
          disableElevation,
          fullWidth,
          disabled,
          ...other,
        })
      : child,
  );

  return (
    <Stack
      className={classNames}
      aria-label={ariaLabel}
      disabled={disabled}
      data-testid={dataTestId}
      {...other}
    >
      {clonedChildren}
    </Stack>
  );
};

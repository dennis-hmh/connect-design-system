import React from 'react';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { SemanticColorToken } from '../../utils/new-colors';
import { Stack } from '../Stack/Stack';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonGroupProps = {
  children: React.ReactNode;
  ariaLabel?: string;
  variant?: 'text' | 'contained' | 'outlined';
  color?: SemanticColorToken; // Updated to use semantic colors
  size?: 'sm' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  disableElevation?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  classes?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export type AllButtonGroupProps = ButtonBaseProps & ButtonGroupProps;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  variant,
  color,
  size,
  orientation = 'horizontal',
  disableElevation = false,
  fullWidth = false,
  disabled,
  ariaLabel,
  dataTestId,
  classes,
  ...props
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
          ...props,
        } as React.Attributes & ButtonGroupProps)
      : child,
  );

  return (
    <Stack className={classNames} aria-label={ariaLabel} data-testid={dataTestId} {...props}>
      {clonedChildren}
    </Stack>
  );
};

import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { Stack } from '../Stack/Stack';

export type ButtonGroupProps = {
  children: React.ReactNode;
  primary?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  classes?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  primary,
  ariaLabel,
  classes,
  disabled,
  dataTestId,
}) => {
  const classNames = [
    'connect__button-group',
    disabled ? 'connect__disabled' : '',
    primary && 'connect__button-group-primary',
    !primary && 'connect__button-group-secondary',
    classes,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Stack className={classNames} aria-label={ariaLabel} data-testid={dataTestId}>
      {children}
    </Stack>
  );
};

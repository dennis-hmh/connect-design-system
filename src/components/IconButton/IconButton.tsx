import React from 'react';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase/ButtonBase';
import { GradeBand } from '../../enum/gradeband';

export type IconButtonProps = {
  children: React.ReactNode;
  ariaLabel: string;
  rounded?: boolean;
  gradeBand?: GradeBand;
};

export const IconButton: React.FC<ButtonBaseProps & IconButtonProps> = ({
  children,
  ariaLabel,
  id,
  classes,
  rounded,
  title,
  onClick,
  type = 'button',
  disabled = false,
  dataTestId,
  ...props
}) => {
  const classNames = ['connect__button-icon', rounded && 'connect__button-rounded', classes]
    .filter(Boolean)
    .join(' ');

  return (
    <ButtonBase
      id={id}
      classes={classNames}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      title={title}
      disabled={disabled}
      data-testid={dataTestId}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

IconButton.displayName = 'IconButton';

import React from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonProps = {
  children: React.ReactNode;
  primary: boolean;
  title?: string;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  submit?: 'button' | 'submit';
  clickHandler?: () => void;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  iconPosition?: 'before' | 'after';
  iconOpacity?: number | undefined;
  ariaLabel?: string;
  dataTestId?: string;
  additionalClass?: string;
  gradeBand?: GradeBand;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  title,
  disabled = false,
  correct,
  incorrect,
  submit = 'button',
  clickHandler,
  iconId,
  iconSize = 'md',
  fill,
  iconPosition = 'before',
  iconOpacity,
  ariaLabel,
  dataTestId,
  additionalClass = '',
}) => {
  const classNames = [
    'connect__button',
    primary && 'connect__button-primary',
    !primary && 'connect__button-secondary',
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    disabled && 'connect__disabled',
    additionalClass,
  ]
    .filter(Boolean)
    .join(' ');

  const iconElement = iconId ? (
    <Icon id={iconId} size={iconSize} fill={fill} opacity={iconOpacity} />
  ) : null;

  return (
    <button
      type={submit}
      className={classNames}
      onClick={clickHandler}
      disabled={disabled}
      data-testid={dataTestId}
      aria-label={ariaLabel || (iconId && !children ? `Icon button ${iconId}` : undefined)}
      title={title ? title : ariaLabel}
    >
      {iconPosition === 'before' && iconElement}
      {children}
      {iconPosition === 'after' && iconElement}
    </button>
  );
};

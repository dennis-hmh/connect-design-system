import React from 'react';
import Icon from './Icon';
import { IconId } from '../utils/icon-list';
import { Color } from '../utils/colors';

export type ButtonProps = {
  children: React.ReactNode;
  primary: boolean;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  submit?: 'button' | 'submit';
  clickHandler?: any;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  iconPosition?: 'before' | 'after';
  ariaLabel?: string;
  dataTestId?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  disabled = false,
  correct,
  incorrect,
  submit = 'button',
  clickHandler,
  iconId,
  iconSize = 'md',
  fill = 'white',
  iconPosition = 'before',
  ariaLabel,
  dataTestId,
}) => {

  
  const isPrimary = primary ? 'connect__button-primary' : 'connect__button-secondary';
  const isCorrect = correct ? 'connect__button-correct' : '';
  const isIncorrect = incorrect ? 'connect__button-incorrect' : '';
  const iconElement = iconId ? <Icon id={iconId} size={iconSize} fill={fill} /> : null;
  return (
    <button
      type={submit}
      className={`connect__button ${isPrimary} ${isCorrect} ${isIncorrect}`}
      onClick={clickHandler}
      disabled={disabled}
      data-testid={dataTestId}
      aria-label={ariaLabel || (iconId && !children ? 'Icon button' : undefined)}
    >
      {iconPosition === 'before' && iconElement}
      {children}
      {iconPosition === 'after' && iconElement}
    </button>
  );
};

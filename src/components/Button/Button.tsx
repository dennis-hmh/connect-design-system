import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonProps = {
  children: React.ReactNode;
  primary: boolean;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  submit?: 'button' | 'submit';
  clickHandler?: () => void;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  iconPosition?: 'before' | 'after';
  iconOpacity?: React.CSSProperties['opacity'];
  ariaLabel?: string;
  dataTestId?: string;
  additionalClass?: string;
  clickedClass?: string;
  gradeBand?: GradeBand;
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
  fill,
  iconPosition = 'before',
  iconOpacity,
  ariaLabel,
  dataTestId,
  additionalClass = '',
  clickedClass,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (clickHandler) {
      clickHandler();
    }
  };

  const classNames = [
    'connect__button',
    primary && 'connect__button-primary',
    !primary && 'connect__button-secondary',
    correct && 'connect__button-correct',
    incorrect && 'connect__button-incorrect',
    additionalClass,
    isClicked && clickedClass,
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
      onClick={handleClick}
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

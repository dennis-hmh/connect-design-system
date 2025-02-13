import React from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

type OldButtonProps = {
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

type NewButtonProps = {
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'large';
  disabled?: boolean;
  disableElevation?: boolean;
  startIcon?: IconId;
  endIcon?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  submit?: 'button' | 'submit';
  className?: string;
  dataTestId?: string;
  ariaLabel?: string;
  gradeBand?: GradeBand;
  correct?: boolean;
  incorrect?: boolean;
};

export type ButtonProps = OldButtonProps | NewButtonProps;

const isNewProps = (props: ButtonProps): props is NewButtonProps => {
  return 'variant' in props || 'startIcon' in props || 'endIcon' in props;
};

const mapColorToFill = (
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
): Color | undefined => {
  const colorMap: Record<string, Color> = {
    primary: 'primary-mid',
    success: 'correct-mid',
    error: 'error-mid',
  };
  return color ? colorMap[color] : undefined;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const oldProps: OldButtonProps = isNewProps(props)
    ? {
        children: props.children,
        primary: props.variant !== 'text',
        disabled: props.disabled,
        correct: props.correct,
        incorrect: props.incorrect,
        iconId: props.startIcon || props.endIcon,
        iconPosition: props.startIcon ? 'before' : props.endIcon ? 'after' : 'before',
        iconSize: props.iconSize || 'md',
        clickHandler: props.onClick
          ? () => props.onClick?.({} as React.MouseEvent<HTMLButtonElement>)
          : undefined,
        submit: props.submit,
        dataTestId: props.dataTestId,
        ariaLabel: props.ariaLabel,
        gradeBand: props.gradeBand,
        fill: mapColorToFill(props.color),
        additionalClass: `${props.className || ''} ${
          props.color ? `connect__button-${props.color}` : ''
        }`.trim(),
        iconOpacity: undefined,
        title: undefined,
      }
    : props;

  const classNames = [
    'connect__button',
    oldProps.primary && 'connect__button-primary',
    !oldProps.primary && 'connect__button-secondary',
    oldProps.correct && 'connect__feedback-correct',
    oldProps.incorrect && 'connect__feedback-incorrect',
    isNewProps(props) && props.size === 'small' && 'connect__button-small',
    oldProps.additionalClass,
  ]
    .filter(Boolean)
    .join(' ');

  const iconElement = oldProps.iconId ? (
    <Icon
      id={oldProps.iconId}
      size={oldProps.iconSize || 'md'}
      fill={oldProps.fill}
      opacity={oldProps.iconOpacity}
    />
  ) : null;

  return (
    <button
      type={oldProps.submit}
      className={classNames}
      onClick={oldProps.clickHandler}
      disabled={oldProps.disabled}
      data-testid={oldProps.dataTestId}
      aria-label={
        oldProps.ariaLabel ||
        (oldProps.iconId && !oldProps.children ? `Icon button ${oldProps.iconId}` : undefined)
      }
      title={oldProps.title ? oldProps.title : oldProps.ariaLabel}
    >
      {oldProps.iconPosition === 'before' && iconElement}
      {oldProps.children}
      {oldProps.iconPosition === 'after' && iconElement}
    </button>
  );
};

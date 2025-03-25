import React, { useContext } from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';
import { ButtonMenuContext } from '../../context/ButtonMenuContext';

export type ButtonMenuProps = {
  children?: React.ReactNode;
  id?: string | undefined;
  additionalClass?: string;
  clickedClass?: string;
  iconId?: IconId;
  variant?: 'plain';
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  rounded?: boolean;
  backgroundColor?: Color;
  ariaLabel?: string;
  title?: string;
  clickHandler?: () => void;
  onClick?: () => void;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const ButtonMenu: React.FC<ButtonMenuProps> = ({
  children,
  id = '',
  additionalClass = '',
  clickedClass,
  iconId,
  rounded,
  iconSize = 'sm',
  variant,
  fill,
  backgroundColor,
  ariaLabel,
  title,
  clickHandler,
  onClick,
  dataTestId,
}) => {
  const context = useContext(ButtonMenuContext);
  const clickedButtonId = context?.clickedButtonId;
  const setClickedButtonId = context?.setClickedButtonId;

  const handleClick = () => {
    if (setClickedButtonId) {
      setClickedButtonId(clickedButtonId === id ? '' : id);
    }
    if (clickHandler) {
      clickHandler();
    }
    if (onClick) {
      onClick();
    }
  };

  const isClicked = clickedButtonId === id;

  const classNames = [
    'connect__button',
    'connect__button-menu',
    variant && `connect__button-${variant}`,

    rounded && 'connect__button-rounded',
    additionalClass,
    isClicked && clickedClass,
  ]
    .filter(Boolean)
    .join(' ');

  const iconElement = iconId ? <Icon id={iconId} size={iconSize} fill={fill} /> : null;


  return (
    <button
      id={id}
      className={classNames}
      onClick={handleClick}
      data-testid={dataTestId}
      aria-label={ariaLabel || (iconId ? `Icon button ${iconId}` : undefined)}
      title={title ? title : ariaLabel}
      style={
        backgroundColor
          ? ({ '--variant__btn-bg': `var(--connect__${backgroundColor})` } as React.CSSProperties)
          : undefined
      }
    >
      {iconElement}
      {children}
    </button>
  );
};

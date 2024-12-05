import React, { useContext } from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';
import { ButtonMenuContext } from '../../context/ButtonMenuContext';

export type ButtonMenuProps = {
  children: React.ReactNode;
  id?: string;
  title?: string;
  backgroundColor?: Color;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  ariaLabel?: string;
  dataTestId?: string;
  additionalClass?: string;
  clickedClass?: string;
  onClick?: () => void;
  gradeBand?: GradeBand;
};

export const ButtonMenu: React.FC<ButtonMenuProps> = ({
  children,
  id,
  title,
  backgroundColor,
  clickHandler,
  iconId,
  iconSize = 'md',
  fill,
  ariaLabel,
  additionalClass = '',
  clickedClass,
  dataTestId,
}) => {
  const context = useContext(ButtonMenuContext);
  const clickedButtonId = context?.clickedButtonId;
  const setClickedButtonId = context?.setClickedButtonId;

  const handleClick = () => {
    if (setClickedButtonId) {
      setClickedButtonId(clickedButtonId === id ? null : id);
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
        backgroundColor ? { '--variant__btn-bg': `var(--connect__${backgroundColor})` } : undefined
      }
    >
      {(children = iconElement)}
    </button>
  );
};

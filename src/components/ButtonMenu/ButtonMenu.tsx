import React from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';
import { useButtonMenuContext } from '../../context/ButtonMenuContext';

export type ButtonMenuProps = {
  id: string;
  children: React.ReactNode;
  title?: string;
  clickHandler?: () => void;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  iconPosition?: 'before' | 'after';
  ariaLabel?: string;
  dataTestId?: string;
  additionalClass?: string;
  clickedClass?: string;
  gradeBand?: GradeBand;
};

export const ButtonMenu: React.FC<ButtonMenuProps> = ({
  id,
  children,
  title,
  clickHandler,
  iconId,
  iconSize = 'md',
  fill,
  iconPosition = 'before',
  ariaLabel,
  additionalClass = '',
  clickedClass,
  dataTestId,
}) => {
  const { clickedButtonId, setClickedButtonId } = useButtonMenuContext();

  const handleClick = () => {
    setClickedButtonId(clickedButtonId === id ? null : id);
    if (clickHandler) clickHandler();
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
      aria-label={ariaLabel || (iconId && !children ? `Icon button ${iconId}` : undefined)}
      title={title ? title : ariaLabel}
    >
      {iconPosition === 'before' && iconElement}
      {children}
      {iconPosition === 'after' && iconElement}
    </button>
  );
};

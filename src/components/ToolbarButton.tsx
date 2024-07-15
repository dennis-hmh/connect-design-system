import React, { useState } from 'react';
import Icon from './Icon';
import { IconId } from '../utils/icon-list';
import { Color } from '../utils/colors';

export type ToolbarButtonProps = {
  clickHandler?: () => void;
  iconId: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  ariaLabel: string;
  ariaHasPopup?: boolean;
  ariaExpanded?: boolean;
  className?: string;
  dataTestId?: string;
};

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  clickHandler,
  iconId,
  iconSize = 'md',
  fill,
  ariaLabel,
  ariaHasPopup,
  ariaExpanded,
  className,
  dataTestId,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButtonClick = () => {
    if (clickHandler) {
      clickHandler();
    }
    setIsSelected(!isSelected);
  };

  const buttonClass = isSelected ? 'selected' : '';

  const iconElement = <Icon id={iconId} size={iconSize} fill={fill} />;
  return (
    <button
      className={`connect__button connect__button-toolbar ${buttonClass} ${className || ''}`}
      onClick={handleButtonClick}
      data-testid={dataTestId}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      title={ariaLabel}
    >
      {iconElement}
    </button>
  );
};

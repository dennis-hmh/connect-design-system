import React from 'react';
import Icon from './Icon';
import { IconId } from '../utils/icon-list';
import { Color } from '../utils/colors';

export type ToolbarButtonProps = {
  children?: React.ReactNode;
  clickHandler?: any;
  iconId: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  ariaLabel?: string;
  ariaHasPopup?: boolean;
  ariaExpanded?: boolean;
  dataTestId?: string;
};

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  children,
  clickHandler,
  iconId,
  iconSize = 'md',
  fill = 'white',
  ariaLabel,
  ariaHasPopup,
  ariaExpanded,
  dataTestId,
}) => {
  const iconElement = <Icon id={iconId} size={iconSize} fill={fill} />;
  return (
    <button
      className="connect__button connect__button-toolbar"
      onClick={clickHandler}
      data-testid={dataTestId}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
    >
      {iconElement}
      {children}
    </button>
  );
};

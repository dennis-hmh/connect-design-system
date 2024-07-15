import React from 'react';
import { ToolbarButton } from './ToolbarButton';
import { IconId } from '../utils/icon-list';
import { Color } from '../utils/colors';
import ToolbarSubMenu from './ToolbarSubMenu';
import Tooltip from './Tooltip';

export type ToolbarItemProps = {
  id: IconId | string;
  label?: string;
  fill?: Color;
  children?: ToolbarItemProps[];
  expanded?: boolean;
  onClick?: (id: string) => void;
};

const colorOptions: { id: string; fill: Color }[] = [
  { id: 'color', fill: 'gray-c70' },
  { id: 'color', fill: 'red-s40' },
  { id: 'color', fill: 'golden-s25' },
  { id: 'color', fill: 'green-s40' },
  { id: 'color', fill: 'blue-s40' },
  { id: 'color', fill: 'cerise-s40' },
];

const ToolbarItem: React.FC<ToolbarItemProps & { expandedId: string | null }> = ({
  id,
  label,
  fill,
  children,
  onClick,
  expandedId,
}) => {
  const expanded = id === expandedId;
  const isSelected = id === expandedId;
  return (
    <li className={`connect__toolbar-item ${isSelected ? 'selected' : ''}`} role="none">
      <Tooltip label={label || id}>
        <ToolbarButton
          iconId={id as IconId}
          clickHandler={() => onClick && onClick(id)}
          ariaLabel={label || id}
          ariaExpanded={expanded}
          ariaHasPopup={!!children}
          className={isSelected ? 'selected' : ''}
          fill={fill}
        />
      </Tooltip>
      {expanded && children && (
        <ToolbarSubMenu
          children={children}
          expandedId={expandedId}
          onClick={onClick || (() => {})}
          colorOptions={colorOptions}
        />
      )}
    </li>
  );
};

export default ToolbarItem;

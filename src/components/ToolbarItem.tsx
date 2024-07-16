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
  onClick?: (id: string) => void;
  isSubMenuItem?: boolean;
  colorOptions?: { id: string; fill: Color }[];
};

const ToolbarItem: React.FC<
  ToolbarItemProps & {
    expandedId: string | null;
    selectedId: string | null;
    onSubMenuItemClick: (id: string) => void;
  }
> = ({
  id,
  label,
  fill,
  children,
  onClick,
  expandedId,
  selectedId,
  onSubMenuItemClick,
  isSubMenuItem,
  colorOptions,
}) => {
  const expanded = id === expandedId;
  const isSelected = id === expandedId;

  console.log(`ToolbarItem: ${id}, expanded: ${expanded}, isSelected: ${isSelected}`);

  return (
    <li className="connect__toolbar-item" role="none">
      {isSubMenuItem ? (
        <ToolbarButton
          iconId={id as IconId}
          clickHandler={() => onClick && onClick(id)}
          ariaLabel={label || id}
          ariaExpanded={expanded}
          ariaHasPopup={!!children}
          className={isSelected ? 'selected' : ''}
          fill={fill}
        />
      ) : (
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
      )}
      {expanded && children && (
        <ToolbarSubMenu
          children={children}
          selectedId={selectedId}
          onClick={onSubMenuItemClick}
          colorOptions={colorOptions || []}
        />
      )}
    </li>
  );
};

export default ToolbarItem;

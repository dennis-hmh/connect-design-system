import React from 'react';
import ToolbarItem, { ToolbarItemProps } from './ToolbarItem';
import { Color } from '../utils/colors';

type ToolbarSubMenuProps = {
  children: ToolbarItemProps[];
  selectedId: string | null;
  onClick: (id: string) => void;
  colorOptions: { id: string; fill: Color }[];
};

const ToolbarSubMenu: React.FC<ToolbarSubMenuProps> = ({
  children,
  selectedId,
  onClick,
  colorOptions,
}) => {
  return (
    <ul className="connect__toolbar-item-menu" role="menu" aria-label="Submenu">
      <li role="none" className="connect__toolbar-item-menu-item">
        <ul
          role="menu"
          className="connect__toolbar-item-menu-item-sub-menu"
          aria-label="Outline Shapes"
        >
          {children
            .filter((child) => !child.fill)
            .map((child) => (
              <ToolbarItem
                key={child.id}
                {...child}
                onClick={onClick}
                expandedId={null}
                selectedId={selectedId}
                onSubMenuItemClick={onClick}
              />
            ))}
        </ul>
      </li>
      <li role="none" className="connect__toolbar-item-menu-item">
        <ul
          role="menu"
          className="connect__toolbar-item-menu-item-sub-menu"
          aria-label="Filled Squares"
        >
          {colorOptions.map((color) => (
            <ToolbarItem
              key={color.id + color.fill}
              id={color.id}
              fill={color.fill}
              onClick={onClick}
              expandedId={null}
              selectedId={selectedId}
              onSubMenuItemClick={onClick}
            />
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default ToolbarSubMenu;

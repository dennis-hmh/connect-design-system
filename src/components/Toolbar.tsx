import React, { useState } from 'react';
import { ToolbarButton } from './ToolbarButton';
import { IconId } from '../utils/icon-list';
import { Color } from '../utils/colors';

type ToolbarItemProps = {
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
      <ToolbarButton
        iconId={id as IconId}
        clickHandler={() => onClick && onClick(id)}
        ariaLabel={label || id}
        ariaExpanded={expanded}
        ariaHasPopup={!!children}
        className={isSelected ? 'selected' : ''}
        fill={fill}
      />
      {expanded && children && (
        <ul
          className="connect__toolbar-item-menu"
          role="menu"
          aria-label={`${label || id} Submenu`}
        >
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
                    expandedId={expandedId}
                    onClick={onClick}
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
                  expandedId={expandedId}
                  onClick={onClick}
                />
              ))}
            </ul>
          </li>
        </ul>
      )}
    </li>
  );
};

const Toolbar: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toolbarItems: ToolbarItemProps[] = [
    {
      id: 'shapes-outline',
      label: 'Shapes',
      children: [
        { id: 'rectangle', label: 'Square Shape' },
        { id: 'triangle', label: 'Triangle Shape' },
        { id: 'circle', label: 'Circle Shape' },
        { id: 'rectangle-outline', label: 'Rectangle Outline' },
        { id: 'triangle-outline', label: 'Triangle Shape Outline' },
        { id: 'circle-outline', label: 'Circle Shape Outline' },
        ...colorOptions.map((color) => ({ id: color.id, fill: color.fill })),
      ],
    },
    {
      id: 'line',
      label: 'Line Tool',
      children: [
        { id: 'line-arrow', label: 'Line Arrow' },
        { id: 'line', label: 'Line' },
        { id: 'line-dashed', label: 'Line Dashed' },
        ...colorOptions.map((color) => ({ id: color.id, fill: color.fill })),
      ],
    },
    {
      id: 'draw-outline',
      label: 'Draw tool',
      children: [
        { id: 'draw-size-one', label: 'Draw Size One' },
        { id: 'draw-size-two', label: 'Draw Size Two' },
        { id: 'draw-size-three', label: 'Draw Size Three' },
        ...colorOptions.map((color) => ({ id: color.id, fill: color.fill })),
      ],
    },
    {
      id: 'stamps-measure-outline',
      label: 'Stamps for Measure',
    },
    {
      id: 'stamps-counter-outline',
      label: 'Stamps for Counter',
    },
    {
      id: 'stamps-special-shapes-outline',
      label: 'Stamps for Special Shapes',
    },
  ];

  const actionItems: ToolbarItemProps[] = [
    { id: 'undo', label: 'Undo', onClick: () => {} },
    { id: 'redo', label: 'Redo', onClick: () => {} },
  ];

  return (
    <menu className="connect__toolbar" aria-label="Shape and Color Toolbar">
      <ul
        className="connect__toolbar-menu"
        role="menu"
        aria-label="Menu with the shapes and color options"
      >
        {toolbarItems.map((item) => (
          <ToolbarItem key={item.id} {...item} expandedId={expandedId} onClick={handleItemClick} />
        ))}
      </ul>
      <ul
        className="connect__toolbar-menu actions-menu"
        role="menu"
        aria-label="Undo / Redo actions"
      >
        {actionItems.map((item) => (
          <li
            key={item.id}
            className={`connect__toolbar-item ${item.id === expandedId ? 'selected' : ''}`}
            onClick={() => item.onClick && item.onClick(item.id)}
          >
            <ToolbarButton
              iconId={item.id}
              ariaLabel={item.label}
              ariaExpanded={false}
              ariaHasPopup={false}
              className={item.id === expandedId ? 'selected' : ''}
            />
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default Toolbar;

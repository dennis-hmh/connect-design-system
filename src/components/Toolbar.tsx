import React, { useState } from 'react';
import ToolbarItem from './ToolbarItem';
import { ToolbarButton } from './ToolbarButton';
import { IconId } from '../utils/icon-list';
import { Color } from '../utils/colors';

type ToolbarItemProps = {
  id: IconId | string;
  label?: string;
  fill?: Color;
  children?: ToolbarItemProps[];
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

const Toolbar: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    console.log(`Clicked item: ${id}`);
    setExpandedId(expandedId === id ? null : id);
  };

  const handleSubMenuItemClick = (id: string) => {
    console.log(`Clicked sub-menu item: ${id}`);
    setSelectedId(selectedId === id ? null : id);
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
      label: 'Lines',
      children: [
        { id: 'line-arrow', label: 'Line Arrow' },
        { id: 'line', label: 'Line' },
        { id: 'line-dashed', label: 'Line Dashed' },
        ...colorOptions.map((color) => ({ id: color.id, fill: color.fill })),
      ],
    },

    {
      id: 'stamps-counter-outline',
      label: 'Counters',
    },
    {
      id: 'stamps-measure-outline',
      label: 'Measurements',
    },
    {
      id: 'stamps-special-shapes-outline',
      label: 'Special Shapes',
    },
    {
      id: 'draw-outline',
      label: 'Pen',
      children: [
        { id: 'draw-size-one', label: 'Draw Size One' },
        { id: 'draw-size-two', label: 'Draw Size Two' },
        { id: 'draw-size-three', label: 'Draw Size Three' },
        ...colorOptions.map((color) => ({ id: color.id, fill: color.fill })),
      ],
    },
    {
      id: 'text',
      label: 'Text',
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
          <ToolbarItem
            key={item.id}
            {...item}
            expandedId={expandedId}
            selectedId={selectedId}
            onClick={handleItemClick}
            onSubMenuItemClick={handleSubMenuItemClick}
            colorOptions={colorOptions} // Pass colorOptions here
          />
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
              iconId={item.id as IconId}
              ariaLabel={item.label || ''}
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

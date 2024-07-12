import React, { useState } from 'react';
import { ToolbarButton } from './ToolbarButton';
import { IconId } from '../utils/icon-list';

type ToolbarItemProps = {
  id: IconId;
  label: string;
  children?: ToolbarItemProps[];
  expanded?: boolean;
  onClick?: (id: string) => void;
};
const ToolbarItem: React.FC<ToolbarItemProps & { expandedId: string | null }> = ({
  id,
  label,
  children,
  expanded,
  onClick,
  expandedId,
}) => {
  return (
    <li className="connect__toolbar-item" role="none">
      <ToolbarButton 
        iconId={id}
        clickHandler={() => onClick && onClick(id)}
        ariaLabel={label}
        ariaExpanded={expanded}
        ariaHasPopup={!!children}
      >
        {label}
      </ToolbarButton>
      {expanded && children && (
        <ul className="connect__toolbar-item-menu" role="menu" aria-label={`${label} Submenu`}>
          {children.map((child) => (
            <ToolbarItem key={child.id} {...child} expandedId={expandedId} onClick={onClick} />
          ))}
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
        { id: 'rectangle-outline', label: 'Square Outline' },
        { id: 'triangle-outline', label: 'Triangle Outline' },
        { id: 'circle-outline', label: 'Circle Outline' },
      ],
    },
    {
      id: 'line',
      label: 'Line Tool',
      children: [
        { id: 'line-arrow', label: 'Line Arrow' },
        { id: 'line', label: 'Line' },
        { id: 'line-dashed', label: 'Line Dashed' },
      ],
    },
    {
      id: 'draw-outline',
      label: 'Draw tool',
      children: [
        { id: 'draw-size-one', label: 'draw size one' },
        { id: 'draw-size-two', label: 'draw size two' },
        { id: 'draw-size-three', label: 'draw size three' },
      ],
    },
    {
      id: 'stamps-measure-outline',
      label: 'Stamps for meausre',
    },
    {
      id: 'stamps-counter-outline',
      label: 'Stamps for counter',
    },
    {
      id: 'stamps-special-shapes-outline',
      label: 'Stamps for special shapes',
    },
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
    </menu>
  );
};

export default Toolbar;

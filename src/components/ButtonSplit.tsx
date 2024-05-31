import React, { useEffect, useRef, useState, KeyboardEvent } from 'react';
import Icon from './Icons';

export type ButtonSplitProps = {
  children: React.ReactNode;
  data: { label: string; value: React.ReactNode }[];
  disabled?: boolean;
  iconId?: string;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: string;
  ariaLabel?: string;
  dataTestId?: string;
};

export function ButtonSplit({ children, disabled, data, dataTestId }: ButtonSplitProps) {
  const [open, setOpen] = useState(false);
  const drop = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (drop.current && !drop.current.contains(event.target as Node) && open) {
      setOpen(false);
    }
  };

  const handleToggle = () => setOpen(!open);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className={`connect__button-split connect__button connect__button-primary`}
      ref={drop}
      data-testid={dataTestId}
    >
      <button type="button" className={``} disabled={disabled}>
        {children}
      </button>
      <button
        type="button"
        className={``}
        disabled={disabled}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-label="Toggle extra options"
      >
        <Icon id={open ? 'arrow-up' : 'arrow-down'} size="sm" fill="neutrals-white" />
      </button>
      {open && <ButtonSplitMenu data={data} />}
    </div>
  );
}

function ButtonSplitMenu<T extends React.ReactNode>({
  data,
}: {
  data: { label: string; value: T }[];
}) {
  return (
    <>
      <ul role="menu">
        {data.map((option) => (
          <li role="menuitem">{option.value}</li>
        ))}
      </ul>
    </>
  );
}

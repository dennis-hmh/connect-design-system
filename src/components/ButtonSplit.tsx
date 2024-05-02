import React, { useEffect, useRef, useState, KeyboardEvent } from 'react';

export type ButtonSplitProps<T> = {
  children: React.ReactNode;
  data: { label: string; value: T }[];
  disabled?: boolean;
};

export function ButtonSplit<T>({ children, disabled, data }: ButtonSplitProps<T>) {
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
    <div className={`connect__button-split`} ref={drop}>
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
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
          <path
            fill="#fff"
            d="M4.707 7.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L10 12.586 4.707 7.293Z"
          />
        </svg>
      </button>
      {open && <ButtonSplitMenu data={data} />}
    </div>
  );
}

function ButtonSplitMenu<T>({ data }: { data: { label: string; value: T }[] }) {
  return (
    <>
      <ul role="menu">
        {data.map((option) => (
          <li role="menuitem">{option.label}</li>
        ))}
      </ul>
    </>
  );
}

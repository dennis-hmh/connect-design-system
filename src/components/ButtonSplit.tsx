import React, { useEffect, useRef, useState } from 'react';

export type ButtonSplitProps<T> = {
  children: React.ReactNode;
  data: { label: string; value: T };
  disabled?: boolean;
};

export function ButtonSplit<T>({ children, disabled, data }: ButtonSplitProps<T>) {
  const [name, setName] = useState('Split Button');
  const [open, setOpen] = useState(false);

  const drop = useRef<HTMLInputElement | null>(null);
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current?.className}`) && open) {
      setOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <div className={`connect__button-split`} ref={drop}>
      <button type="button" className={``} disabled={disabled}>
        {children}
      </button>
      <button
        type="button"
        className={``}
        disabled={disabled}
        onClick={() => setOpen((open) => !open)}
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

function ButtonSplitMenu({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={item.label + index}>{item.value}</li>
      ))}
    </ul>
  );
}

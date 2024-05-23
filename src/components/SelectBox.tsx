import React, { useState, useRef, ChangeEvent } from 'react';

type SelectBoxProp<T extends string | number> = {
  data: { label: string; value: T }[];
  defaultValue?: T;
  correct?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
  dataTestId?: string;
};

export function SelectBox<T extends string | number>({
  data,
  defaultValue,
  correct,
  incorrect,
  disabled,
  dataTestId,
}: SelectBoxProp<T>) {
  const [select, setSelect] = useState<T | string>(defaultValue || '');
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value as T);
  };

  const selectClasses = `connect__select ${correct ? 'connect__select-correct' : ''} ${incorrect ? 'connect__select-incorrect' : ''}`;

  return (
    <label>
      <select
        ref={selectRef}
        className={selectClasses}
        value={select}
        aria-label="Select Item"
        onChange={handleChange}
        disabled={disabled}
        data-testid={dataTestId}
      >
        <SelectBoxOptions data={data} />
      </select>
    </label>
  );
}

function SelectBoxOptions<T extends string | number>({
  data,
}: {
  data: { label: string; value: T }[];
}) {
  return (
    <>
      {data.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </>
  );
}

import React, { useState, ChangeEvent } from 'react';

type SelectBoxProp<T> = {
  data: { label: string; value: T }[];
  correct?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
  dataTestId?: string;
};

export function SelectBox<T>({ data, correct, incorrect, disabled, dataTestId }: SelectBoxProp<T>) {
  const [select, setSelect] = useState('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  const selectClasses = `connect__select ${correct ? 'connect__select-correct' : ''} ${incorrect ? 'connect__select-incorrect' : ''}`;

  return (
    <label>
      <select
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

function SelectBoxOptions<T>({ data }: { data: { label: string; value: T }[] }) {
  return (
    <>
      {data.map((option, index) => (
        <option key={index} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </>
  );
}

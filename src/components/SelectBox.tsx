import React, { useState } from 'react';

export type SelectBoxProp<T> = {
  correct: boolean;
  incorrect: boolean;
  disabled?: boolean;
<<<<<<< HEAD
  data?: { label: string; value: T };
=======
  data: { label: string; value: T };
>>>>>>> andrew
};

export function SelectBox<T>({ correct, incorrect, disabled, data }: SelectBoxProp<T>) {
  const isCorrect = correct ? 'connect__select-correct' : '';
  const isIncorrect = incorrect ? 'connect__select-incorrect' : '';

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <label>
      <select
        className={`connect__select ${isCorrect} ${isIncorrect}`}
        defaultValue={value}
        onChange={handleChange}
        disabled={disabled}
      >
        <SelectBoxOptions data={data} />
      </select>
    </label>
  );
}

<<<<<<< HEAD
function SelectBoxOptions({ data }) {
=======
export function SelectBoxOptions({ data }) {
>>>>>>> andrew
  return (
    <>
      {data.map((option, index) => (
        <option key={option.value + index} value={option.value}>
          {option.label}
        </option>
      ))}
    </>
  );
}

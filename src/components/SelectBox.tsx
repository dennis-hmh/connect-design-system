import React, { useState } from 'react';

export type SelectBoxProp = {
  correct: boolean;
  incorrect: boolean;
  disabled: boolean;
  value: string;
  options: string[];
};

export function SelectBox({ correct, incorrect, disabled }: SelectBoxProp) {
  const isCorrect = correct ? 'connect__select-correct' : '';
  const isIncorrect = incorrect ? 'connect__select-incorrect' : '';

  const options = [
    { label: 'Tears of the Kingdom', value: 'tears-of-the-kingdom' },
    { label: 'Breath of the Wild', value: 'breath-of-the-wild' },
    { label: 'Skyward Sword', value: 'skyard-sword' },
    { label: 'Twilight Princess', value: 'twilight-princess' },
    { label: 'The Wind Waker', value: 'the-wind-waker' },
    { label: "Majora's Mask", value: "majora's-mask" },
    { label: 'Ocarina of Time', value: 'ocarina-of-time' },
  ];

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <label>
      <select
        className={`connect__select ${isCorrect} ${isIncorrect} `}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

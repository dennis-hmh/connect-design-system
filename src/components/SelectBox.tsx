import React, { useState, ChangeEvent } from 'react';

type SelectBoxProp<T> = {
  data: { label: string; value: T }[];
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  dataTestId?: string;
};

export function SelectBox<T>({
  data,
  correct,
  incorrect,
  answerShown,
  disabled,
  dataTestId,
}: SelectBoxProp<T>) {
  const [select, setSelect] = useState('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  let inputAriaLabel = 'Select Item';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  const selectClasses = `connect__select ${correct ? 'connect__select-correct' : ''} ${incorrect ? 'connect__select-incorrect' : ''}${answerShown ? 'connect__select-shown' : ''}`;
  const shouldBeDisabled = correct || incorrect || answerShown || disabled;

  return (
    <label className={`connect__icon-wrapper ${correct} ${incorrect} ${answerShown}`}>
      <select
        className={selectClasses}
        value={select}
        aria-label={`Select Item${correct ? ', marked as correct' : ''}
        ${incorrect ? ', marked as incorrect' : ''}
        ${answerShown ? ', answer shown' : ''}`}
        onChange={handleChange}
        disabled={shouldBeDisabled}
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

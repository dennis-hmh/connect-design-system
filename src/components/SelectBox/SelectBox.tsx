// @ts-ignore: React is used implicitly in JSX
import React, { useState, useRef, ChangeEvent } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { GradeBand } from 'src/enum/gradeband';

export type SelectBoxProps = {
  data: { value: string; label: string | number }[];
  defaultValue?: string;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function SelectBox({
  data,
  defaultValue,
  correct,
  incorrect,
  answerShown,
  disabled,
  dataTestId,
}: SelectBoxProps) {
  const [select, setSelect] = useState(defaultValue || '');
  const selectRef = useRef<HTMLSelectElement>(null);

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

  const wrapperClasses = `connect__icon-wrapper ${correct ? 'connect__icon-correct' : ''} ${incorrect ? 'connect__icon-incorrect' : ''} ${answerShown ? 'connect__icon-shown' : ''}`;
  const selectClasses = `connect__select ${correct ? 'connect__select-correct' : ''} ${incorrect ? 'connect__select-incorrect' : ''}${answerShown ? 'connect__select-shown' : ''}`;
  const shouldBeDisabled = correct || incorrect || answerShown || disabled;

  return (
    <label className={wrapperClasses}>
      <select
        ref={selectRef}
        className={selectClasses}
        value={select}
        aria-label={inputAriaLabel}
        onChange={handleChange}
        disabled={shouldBeDisabled}
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
  data: { value: string; label: T }[];
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

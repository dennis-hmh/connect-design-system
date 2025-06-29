// @ts-ignore: React is used implicitly in JSX
import React, { useState, useRef, ChangeEvent } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { SemanticColorToken } from 'src/utils/new-colors';
import { GradeBand } from 'src/enum/gradeband';

export type SelectBoxProps = {
  data: { value: string; label: string | number }[];
  value?: string;
  onChange?: (value: string) => void;
  color?: SemanticColorToken;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function SelectBox({
  data,
  value = '',
  onChange,
  color,
  correct,
  incorrect,
  answerShown,
  disabled,
  dataTestId,
}: SelectBoxProps) {
  const shouldBeDisabled = correct || incorrect || answerShown;

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  let inputAriaLabel = 'Select Item';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  const wrapperClasses = [
    'connect__icon-wrapper',
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    answerShown && 'connect__feedback-shown',
    color && `connect__${color}`,
  ]
    .filter(Boolean)
    .join(' ');

  const selectClasses = [
    'connect__select',
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    answerShown && 'connect__feedback-shown',
    (disabled || shouldBeDisabled) && 'connect__disabled',
    color && `connect__${color}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClasses}>
      <select
        ref={selectRef}
        className={selectClasses}
        value={value}
        aria-label={inputAriaLabel}
        onChange={handleChange}
        disabled={disabled || shouldBeDisabled}
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

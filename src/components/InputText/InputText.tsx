// @ts-ignore: React is used implicitly in JSX
import React, { useState } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { CharacterCounter } from '../CharacterCounter/CharacterCounter';
import { GradeBand } from 'src/enum/gradeband';

export type InputTextProps = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  number?: boolean;
  disabled?: boolean;
  characterCount?: boolean;
  characterLimit?: number | undefined;
  placeholderText?: string | undefined;
  onClear?: () => void | undefined;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function InputText({
  value = '',
  onChange,
  correct,
  incorrect,
  answerShown,
  number,
  disabled,
  characterCount,
  characterLimit,
  placeholderText,
  onClear,
  dataTestId,
}: InputTextProps) {
  const [isSelected, setIsSelected] = useState(false);

  const inputStates = [
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    answerShown && 'connect__feedback-shown',
    isSelected && 'connect__selected',
  ]
    .filter(Boolean)
    .join(' ');

  const isNumber = number ? 'number' : 'text';

  let inputAriaLabel = 'Input field';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  const shouldBeDisabled = correct || incorrect || answerShown || disabled;

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <label className={`connect__icon-wrapper ${inputStates}`}>
      <input
        type={isNumber}
        className={`connect__input ${inputStates} ${disabled ? 'connect__disabled' : ''}`}
        disabled={shouldBeDisabled}
        value={value}
        placeholder={placeholderText ? placeholderText : ''}
        onChange={(event) => handleTextChange(event)}
        onMouseDown={() => setIsSelected(true)}
        onBlur={() => setIsSelected(false)}
        aria-label={inputAriaLabel}
        data-testid={dataTestId}
      />
      {onClear && (
        <button
          className={`connect__clear-button ${value ? 'connect__clear-button-visible' : ''}`}
          onClick={() => {
            onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
            onClear();
          }}
          aria-label="Clear input field"
        >
          <svg xmlns="http://www.w3.org/2000/svg" id="close" fill="none" viewBox="0 0 40 40">
            <path
              fill="var(--connect__icon-fill-color, #2d2d2d)"
              d="m19.903 20.848-8.555 8.555a1.325 1.325 0 0 1-.973.403c-.38 0-.703-.134-.972-.403A1.325 1.325 0 0 1 9 28.43c0-.38.134-.704.403-.973l8.555-8.555-8.555-8.555A1.325 1.325 0 0 1 9 9.374c0-.38.134-.703.403-.972S9.996 8 10.375 8c.38 0 .704.134.973.403l8.555 8.555 8.555-8.555c.269-.269.593-.403.973-.403s.703.134.972.403.403.593.403.972c0 .38-.134.704-.403.973l-8.555 8.555 8.555 8.555c.269.269.403.593.403.973s-.134.703-.403.972a1.325 1.325 0 0 1-.972.403c-.38 0-.704-.134-.973-.403l-8.555-8.555Z"
            />
          </svg>
        </button>
      )}
      <CharacterCounter
        charCount={value.toString().length}
        characterLimit={characterLimit}
        characterCount={characterCount}
      />
    </label>
  );
}

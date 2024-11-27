// @ts-ignore: React is used implicitly in JSX
import React, { useState } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { GradeBand } from 'src/enum/gradeband';

export type InputTextProps = {
  correct: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  number?: boolean;
  disabled?: boolean;
  defaultText?: string | number | undefined;
  characterCount?: boolean;
  characterLimit?: number | undefined;
  placeholderText?: string | undefined;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function InputText({
  correct,
  incorrect,
  answerShown,
  number,
  disabled,
  characterCount,
  characterLimit,
  placeholderText,
  defaultText,
  dataTestId,
}: InputTextProps) {
  const inputStates = `${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''} ${answerShown ? 'connect__input-shown' : ''} ${characterCount ? 'connect__input-character-count' : ''}`;

  const isNumber = number ? 'number' : 'text';

  const [text, setText] = useState(defaultText);
  const [charCount, setCharCount] = useState(defaultText?.toString().length || 0);

  let inputAriaLabel = 'Input field';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  const shouldBeDisabled = correct || incorrect || answerShown || disabled;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  return (
    <label className={`connect__icon-wrapper ${inputStates}`}>
      <input
        type={isNumber}
        className={`connect__input ${inputStates}`}
        disabled={shouldBeDisabled}
        value={text}
        placeholder={placeholderText ? placeholderText : ''}
        onChange={handleTextChange}
        aria-label={inputAriaLabel}
        data-testid={dataTestId}
      />
      {characterCount && (
        <div
          className={`connect__character-counter ${
            characterLimit && charCount >= characterLimit
              ? 'connect__character-counter-limit-reached'
              : ''
          }`}
        >
          <em>{charCount}</em>
          {characterLimit ? ` / ${characterLimit}` : ''}
        </div>
      )}
    </label>
  );
}

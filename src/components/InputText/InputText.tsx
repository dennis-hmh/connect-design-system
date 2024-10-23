// @ts-ignore: React is used implicitly in JSX
import React, { useState } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type InputTextProps = {
  correct: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  number?: boolean;
  disabled?: boolean;
  defaultText?: string | undefined;
  characterCount?: boolean;
  placeholderText?: string | undefined;
  defaultText?: string | number;
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
  placeholderText,
  characterLimit,
  defaultText,
  dataTestId,
}: InputTextProps) {
  const inputStates = `${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''} ${answerShown ? 'connect__input-shown' : ''}`;

  const isNumber = number ? 'number' : 'text';

  const [text, setText] = useState(defaultText);
  const [charCount, setCharCount] = useState(defaultText?.length || 0);

  let inputAriaLabel = 'Input field';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  const shouldBeDisabled = correct || incorrect || answerShown || disabled;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (!characterLimit || newText.length <= characterLimit) {
      setText(newText);
      setCharCount(newText.length);
    }
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
          {charCount}
          {characterLimit ? ` / ${characterLimit}` : ''} characters
        </div>
      )}
    </label>
  );
}

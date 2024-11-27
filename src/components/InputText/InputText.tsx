// @ts-ignore: React is used implicitly in JSX
import React, { useState } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { GradeBand } from 'src/enum/gradeband';

export type InputTextProps = {
  correct: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  number?: boolean;
  disabled?: boolean;
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
  const inputStates = `${correct ? 'connect__feedback-correct' : ''} ${incorrect ? 'connect__feedback-incorrect' : ''} ${answerShown ? 'connect__feedback-shown' : ''} ${isSelected ? 'connect__selected' : ''} ${characterCount ? 'connect__input-character-count' : ''}`;

  const isNumber = number ? 'number' : 'text';

  const [text, setText] = useState(defaultText);
  const [charCount, setCharCount] = useState(defaultText?.length || 0);
  const [isSelected, setIsSelected] = useState(false);

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
    setText(newText);
    setCharCount(newText.length);
  };

  return (
    <label className="connect__icon-wrapper">
      <input
        type={isNumber}
        className={`connect__input ${inputStates} ${disabled ? 'connect__disabled' : ''}`}
        disabled={shouldBeDisabled}
        value={text}
        placeholder={placeholderText ? placeholderText : ''}
        onChange={handleTextChange}
        onMouseDown={() => setIsSelected(true)}
        onBlur={() => setIsSelected(false)}
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

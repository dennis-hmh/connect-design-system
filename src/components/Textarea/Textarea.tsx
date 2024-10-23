import React, { useState } from 'react';
import { GradeBand } from '../../enum/gradeband';

export type TextareaProps = {
  correct: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  defaultText?: string | undefined;
  characterCount?: boolean;
  placeholderText?: string | undefined;
  characterLimit?: number;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Textarea: React.FC<TextareaProps> = ({
  correct,
  incorrect,
  answerShown,
  disabled,
  defaultText,
  characterCount,
  placeholderText,
  characterLimit,
  dataTestId,
}) => {
  const inputStates = `${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''} ${answerShown ? 'connect__input-shown' : ''}`;

  const [text, setText] = useState(defaultText || '');
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
      <textarea
        className={`connect__input connect__input-textarea ${inputStates}`}
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
};

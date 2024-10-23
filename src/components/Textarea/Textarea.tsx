import React, { useState } from 'react';

export type TextareaProps = {
  correct: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  defaultText?: string;
  maxLength?: number;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Textarea: React.FC<TextareaProps> = ({
  correct,
  incorrect,
  answerShown,
  disabled,
  defaultText,
  maxLength,
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
    setText(newText);
    setCharCount(newText.length);
  };

  return (
    <label className={`connect__icon-wrapper ${inputStates}`}>
      <textarea
        className={`connect__input connect__input-textarea ${inputStates}`}
        disabled={shouldBeDisabled}
        value={text}
        onChange={handleTextChange}
        aria-label={inputAriaLabel}
        maxLength={maxLength}
        data-testid={dataTestId}
      />
      <div className="char-counter">
        {charCount}
        {maxLength ? ` / ${maxLength}` : ''} characters
      </div>
    </label>
  );
};

import React, { useState } from 'react';
import { GradeBand } from '../../enum/gradeband';

export type TextareaProps = {
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  defaultText?: string | undefined;
  characterCount?: boolean;
  placeholderText?: string | undefined;
  characterLimit?: number;
  toolbar?: React.ReactNode;
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
  toolbar,
  characterLimit,
  dataTestId,
}) => {
  const [text, setText] = useState(defaultText || '');
  const [charCount, setCharCount] = useState(defaultText?.length || 0);
  const [isSelected, setIsSelected] = useState(false);

  const inputStates = [
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    answerShown && 'connect__feedback-shown',
    isSelected && 'connect__selected',
    characterCount && 'connect__input-character-count',
  ]
    .filter(Boolean)
    .join(' ');

  let inputAriaLabel = 'Textarea';
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
    <div className={`connect__icon-wrapper ${inputStates}`}>
      {toolbar && toolbar}
      <textarea
        className={`connect__input connect__input-textarea ${inputStates} ${disabled ? 'connect__disabled' : ''}`}
        disabled={shouldBeDisabled}
        value={text}
        placeholder={placeholderText ? placeholderText : ''}
        onChange={(e) => handleTextChange(e)}
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
          {characterLimit && (
            <>
              <span aria-hidden="true">/</span>
              {characterLimit}
            </>
          )}
        </div>
      )}
    </div>
  );
};

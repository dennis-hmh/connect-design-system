import React, { useState } from 'react';
import { CharacterCounter } from '../CharacterCounter/CharacterCounter';
import { GradeBand } from '../../enum/gradeband';

export type TextareaProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  characterCount?: boolean;
  placeholderText?: string | undefined;
  characterLimit?: number;
  toolbar?: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Textarea: React.FC<TextareaProps> = ({
  value = '',
  onChange,
  correct,
  incorrect,
  answerShown,
  disabled,
  characterCount,
  placeholderText,
  toolbar,
  characterLimit,
  dataTestId,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const inputStates = [
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    answerShown && 'connect__feedback-shown',
    isSelected && 'connect__selected',
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

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`connect__icon-wrapper ${inputStates}`}>
      {toolbar && toolbar}
      <textarea
        className={`connect__input connect__input-textarea ${inputStates} ${disabled ? 'connect__disabled' : ''}`}
        value={value}
        placeholder={placeholderText ? placeholderText : ''}
        onChange={handleTextChange}
        onMouseDown={() => setIsSelected(true)}
        onBlur={() => setIsSelected(false)}
        aria-label={inputAriaLabel}
        disabled={shouldBeDisabled}
        data-testid={dataTestId}
      />
      <CharacterCounter
        charCount={value.toString().length}
        characterLimit={characterLimit}
        characterCount={characterCount}
      />
    </div>
  );
};

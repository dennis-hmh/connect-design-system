import React, { useState } from 'react';
import { Typography } from '../Typography/Typography';
import { Stack } from '../Stack/Stack';
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

  const renderCharacterCounter = () => {
    if (!characterCount) return null;

    const isLimitReached = characterLimit && charCount >= characterLimit;

    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="end"
        spacing="xs"
      >
        <Typography
          element="span"
          size="caption"
          style={isLimitReached ? 'italic' : 'normal'}
          weight={isLimitReached ? 700 : 400}
          color="surface-mid"
        >
          {charCount}
        </Typography>

        {characterLimit && (
          <>
            <Typography element="span" size="caption" color="surface-mid" aria-hidden="true">
              /
            </Typography>
            <Typography element="span" size="caption" color="surface-mid">
              {characterLimit}
            </Typography>
          </>
        )}
      </Stack>
    );
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
      {renderCharacterCounter()}
    </div>
  );
};

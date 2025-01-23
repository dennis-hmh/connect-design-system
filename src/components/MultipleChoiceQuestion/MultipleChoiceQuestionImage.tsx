import React from 'react';
import { GradeBand } from '../../enum/gradeband';

export type MultipleChoiceQuestionImageProp = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  answerShown?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

const getClassNames = ({
  correct,
  incorrect,
  answerShown,
  isChecked,
  disabled,
}: {
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  isChecked: boolean;
  disabled?: boolean;
}) => {
  const inputStates = `${correct ? 'connect__feedback-correct' : ''} ${incorrect ? 'connect__feedback-incorrect' : ''} ${answerShown ? 'connect__choice-label-shown' : ''}`;
  const choiceClass = `connect__choice ${inputStates} ${isChecked ? 'connect__choice-checked' : ''} ${disabled ? 'connect__disabled' : ''}`;
  const labelClass = `connect__choice-label ${inputStates} ${isChecked ? 'connect__label-checked' : ''} ${disabled ? 'connect__disabled' : ''}`;
  return { choiceClass, labelClass };
};

export const MultipleChoiceQuestionImage: React.FC<MultipleChoiceQuestionImageProp> = ({
  type,
  id,
  name,
  children,
  checked,
  onChange,
  disabled,
  correct,
  incorrect,
  answerShown,
  dataTestId,
}) => {
  const { choiceClass, labelClass } = getClassNames({
    correct,
    incorrect,
    answerShown,
    isChecked: checked,
    disabled,
  });

  let inputAriaLabel = 'Multiple Choice Question';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  return (
    <div className="connect__choice-label-wrapper">
      <input
        type={type}
        id={id}
        className={choiceClass}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-label={inputAriaLabel}
        data-testid={dataTestId}
      />
      <label htmlFor={id} className={`connect__mcq-card ${labelClass}`}>
        {children}
      </label>
    </div>
  );
};

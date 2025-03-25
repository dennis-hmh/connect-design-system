import React from 'react';
import { SemanticColorToken } from 'src/utils/new-colors';
import { GradeBand } from 'src/enum/gradeband';

export type InputBoxProps = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  children: React.ReactNode;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: SemanticColorToken;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  classes?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

const getClassNames = ({
  correct,
  incorrect,
  answerShown,
  isChecked,
  disabled,
  color,
}: {
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  isChecked: boolean;
  disabled?: boolean;
  color?: SemanticColorToken;
}) => {
  const shouldBeDisabled = correct || incorrect || answerShown;

  const inputStates = [
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    answerShown && 'connect__feedback-shown',
  ]
    .filter(Boolean)
    .join(' ');

  const choiceClass = [
    'connect__choice',
    inputStates,
    color && `connect__${color}`,
    isChecked && 'connect__choice-checked',
    (disabled || shouldBeDisabled) && 'connect__disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const labelClass = [
    'connect__choice-label',
    inputStates,
    color && `connect__${color}`,
    isChecked && 'connect__label-checked',
    (disabled || shouldBeDisabled) && 'connect__disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return { shouldBeDisabled, choiceClass, labelClass };
};

export const InputBox: React.FC<InputBoxProps> = ({
  type,
  id,
  name,
  children,
  checked,
  onChange,
  color,
  correct,
  incorrect,
  answerShown,
  disabled,
  classes,
  dataTestId,
}) => {
  const { shouldBeDisabled, choiceClass, labelClass } = getClassNames({
    correct,
    incorrect,
    answerShown,
    isChecked: checked,
    disabled,
    color,
  });

  return (
    <div className="connect__position-relative-wrapper">
      <input
        type={type}
        id={id}
        className={choiceClass}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled || shouldBeDisabled}
        data-testid={dataTestId}
      />
      <label htmlFor={id} className={`${labelClass} ${classes ? classes : ''}`}>
        {children}
      </label>
    </div>
  );
};

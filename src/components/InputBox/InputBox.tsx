import React, { useRef } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type InputBoxProps = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  children: React.ReactNode;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
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

export const InputBox: React.FC<InputBoxProp> = ({
  type,
  id,
  name,
  children,
  checked,
  onChange,
  correct,
  incorrect,
  answerShown,
  disabled,
  dataTestId,
}) => {
  const { choiceClass, labelClass } = getClassNames({
    correct,
    incorrect,
    answerShown,
    isChecked: checked,
    disabled,
  });

  return (
    <div className="connect__choice-label-wrapper">
      <input
        ref={useRef<HTMLInputElement>(null)}
        type={type}
        id={id}
        className={choiceClass}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        data-testid={dataTestId}
      />
      <label htmlFor={id} className={labelClass}>
        {children}
      </label>
    </div>
  );
};

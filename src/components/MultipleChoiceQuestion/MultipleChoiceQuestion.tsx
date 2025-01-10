import React, { useRef, useEffect, useState } from 'react';
import { useMultipleChoiceQuestion } from '../../context/MultipleChoiceQuestionHook';
import { GradeBand } from '../../enum/gradeband';

export type MultipleChoiceQuestionProp = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  answerShown?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

export const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProp> = ({
  type,
  id,
  name,
  children,
  checked,
  disabled,
  correct,
  incorrect,
  answerShown,
  dataTestId,
  onChange,
}) => {
  const { selectedValue, setSelectedValue } = useMultipleChoiceQuestion();
  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'radio') {
      setSelectedValue(id);
    } else {
      setIsChecked(event.target.checked);
    }
    if (onChange) {
      onChange(event);
    }
  };

  useEffect(() => {
    if (type === 'radio') {
      setIsChecked(selectedValue === id);
    } else {
      setIsChecked(checked || false);
    }
  }, [checked, id, selectedValue, type]);

  let inputAriaLabel = 'Multiple Choice Question';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  const { choiceClass, labelClass } = getClassNames({
    correct,
    incorrect,
    answerShown,
    isChecked,
    disabled,
  });

  return (
    <div className="connect__choice-label-wrapper">
      <input
        ref={checkRef}
        type={type}
        id={id}
        className={choiceClass}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        aria-label={inputAriaLabel}
        data-testid={dataTestId}
      />
      <label htmlFor={id} className={labelClass}>
        {children}
      </label>
    </div>
  );
};

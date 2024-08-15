import React, { useRef, useState } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type InputBoxProps = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function InputBox({
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
}: InputBoxProps) {
  const inputStates = `${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''} ${answerShown ? 'connect__mcq-label-shown' : ''}`;

  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked || false);
  const handleChange = () => {
    setIsChecked(checkRef.current?.checked ?? false);
  };

  return (
    <div className="connect__mcq-label-wrapper">
      <input
        ref={checkRef}
        type={type}
        id={id}
        className={`connect__input ${inputStates}`}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        data-testid={dataTestId}
      />
      <label className={`connect__mcq-label ${inputStates}`} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

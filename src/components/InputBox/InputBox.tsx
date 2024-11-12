import React, { useRef, useState, useEffect } from 'react';
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
  noShadow?: boolean;
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
  noShadow = false,
  dataTestId,
}: InputBoxProps) {
  const inputStates = `${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''} ${answerShown ? 'connect__choice-label-shown' : ''} ${noShadow ? 'connect__input-no-shadow' : ''}`;

  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked || false);
  const handleChange = () => {
    setIsChecked(checkRef.current?.checked ?? false);
  };

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  return (
    <div className="connect__choice-label-wrapper">
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
      <label htmlFor={id} className={`connect__choice-label ${inputStates}`}>
        {children}
      </label>
    </div>
  );
}

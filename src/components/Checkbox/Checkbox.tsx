import React, { useRef, useState, useEffect } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type CheckboxProps = {
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function Checkbox({ id, name, children, checked, disabled, dataTestId }: CheckboxProps) {
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
        type="checkbox"
        id={id}
        className={`connect__input }`}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        data-testid={dataTestId}
      />
      <label htmlFor={id} className={`connect__choice-label connect__input-no-shadow`}>
        {children}
      </label>
    </div>
  );
}

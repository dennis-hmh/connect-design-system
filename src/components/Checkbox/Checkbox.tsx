import React from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type CheckboxProps = {
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

const getClassNames = ({ isChecked, disabled }: { isChecked: boolean; disabled?: boolean }) => {
  const choiceClass = `connect__choice ${isChecked ? 'connect__choice-checked' : ''} ${disabled ? 'connect__disabled' : ''}`;
  const labelClass = `connect__choice-label ${isChecked ? 'connect__label-checked' : ''} ${disabled ? 'connect__disabled' : ''}`;
  return { choiceClass, labelClass };
};

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  children,
  checked = false,
  onChange,
  disabled,
  dataTestId,
}) => {
  const { choiceClass, labelClass } = getClassNames({
    isChecked: checked,
    disabled,
  });
  return (
    <div className="connect__position-relative-wrapper">
      <input
        type="checkbox"
        id={id}
        className={`connect__choice ${choiceClass}`}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        data-testid={dataTestId}
      />
      <label
        htmlFor={id}
        className={`connect__choice-label connect__input-no-shadow ${labelClass}`}
      >
        {children}
      </label>
    </div>
  );
};

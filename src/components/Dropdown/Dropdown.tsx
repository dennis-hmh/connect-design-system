import React, { useState } from 'react';
import { Hint } from '../Hint/Hint';
import { GradeBand } from 'src/enum/gradeband';

export type DropdownProps = {
  children: React.ReactNode;
  data: { label: string; value: React.ReactNode }[];
  label?: string;
  hint?: string;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  data,
  label,
  hint,
  correct,
  incorrect,
  answerShown,
  disabled = false,
  dataTestId,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const feedbackStates = [
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    answerShown && 'connect__feedback-shown',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  const handleItemClick = (label: string) => {
    setSelectedValue(label);
    setOpen(false);
  };

  return (
    <div
      id="connect__dropdown-button"
      className={`connect__dropdown ${feedbackStates} ${open ? 'connect__dropdown-open' : ''}${disabled ? 'connect__disabled' : ''}`}
      role="button"
      aria-disabled={disabled}
      aria-haspopup="listbox"
      aria-labelledby="connect__dropdown-label"
      aria-expanded={open}
      onClick={handleClick}
      tabIndex={0}
      data-testid={dataTestId}
    >
      <span id="connect__dropdown-label" className="connect__dropdown-label" hidden>
        {label || children}
      </span>
      <span id="connect__selected-text-id" className="connect__selected-text">
        {selectedValue || children}
      </span>
      <div className="connect__feedback-stamp"></div>
      {hint && <Hint>{hint}</Hint>}
      {open && (
        <div className="connect__dropdown-menu" aria-labelledby="connect__dropdown-label">
          <DropdownMenu data={data} onItemClick={handleItemClick} selectedValue={selectedValue} />
        </div>
      )}
    </div>
  );
};

export type DropdownMenuProps = {
  data: { label: string; className: string | null; ariaSelected: boolean; value: string }[];
  onItemClick: (label: string) => void;
  selectedValue: string | null;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ data, onItemClick, selectedValue }) => {
  return (
    <ul className="connect__dropdown-list-menu" role="listbox">
      {data.map((item, index) => (
        <li
          key={`connect__menu-item-${index}`}
          className={`connect__dropdown-item ${selectedValue === item.label ? 'connect__selected' : ''}`}
          role="option"
          aria-selected={item.ariaSelected || false}
          onClick={() => onItemClick(item.label)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

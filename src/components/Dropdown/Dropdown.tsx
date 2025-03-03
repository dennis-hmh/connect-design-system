import React, { useRef, useState, useMemo } from 'react';
import { Hint } from '../Hint/Hint';
import { GradeBand } from 'src/enum/gradeband';

type DropdownItem = {
  label: string;
  disabled?: boolean;
};

export type DropdownProps = {
  children: React.ReactNode;
  data: DropdownItem[];
  id?: string;
  label?: string;
  selectedValue?: string | null;
  onChange?: (value: string | null) => void;
  onClear?: () => void;
  hint?: string;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  disabled?: boolean;
  fixedWidth?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  data,
  id,
  label,
  selectedValue = null,
  onChange,
  onClear,
  hint,
  correct,
  incorrect,
  answerShown,
  disabled = false,
  dataTestId,
  fixedWidth = false,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const feedbackStates = useMemo(() => {
    return [
      correct && 'connect__feedback-correct',
      incorrect && 'connect__feedback-incorrect',
      answerShown && 'connect__feedback-shown',
      open && 'connect__dropdown-open',
      disabled && 'connect__disabled',
      fixedWidth && 'connect__fixed-dimensions',
    ]
      .filter(Boolean)
      .join(' ');
  }, [correct, incorrect, answerShown, open, disabled, fixedWidth]);

  const handleClick = (event) => {
    if (!disabled) {
      event.preventDefault();
      setOpen(!open);
    }
  };

  const handleItemClick = (label: string) => {
    setOpen(false);
    onChange?.(label);
  };

  const handleClear = () => {
    onChange?.(null);
    onClear?.();
  };

  return (
    <label className="connect__dropdown-wrapper">
      <div
        ref={dropdownRef}
        id={id || 'connect__dropdown-button'}
        className={`connect__dropdown ${feedbackStates}`}
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
        <div className="connect__dropdown-menu" aria-labelledby="connect__dropdown-label">
          <DropdownMenu data={data} onItemClick={handleItemClick} selectedValue={selectedValue} />
        </div>
      </div>
      {onClear && (
        <button
          className={`connect__clear-button ${selectedValue ? 'connect__clear-button-visible' : ''}`}
          onClick={handleClear}
          aria-label="Clear selection"
        >
          <svg xmlns="http://www.w3.org/2000/svg" id="close" fill="none" viewBox="0 0 40 40">
            <path
              fill="var(--connect__icon-fill-color, #2d2d2d)"
              d="m19.903 20.848-8.555 8.555a1.325 1.325 0 0 1-.973.403c-.38 0-.703-.134-.972-.403A1.325 1.325 0 0 1 9 28.43c0-.38.134-.704.403-.973l8.555-8.555-8.555-8.555A1.325 1.325 0 0 1 9 9.374c0-.38.134-.703.403-.972S9.996 8 10.375 8c.38 0 .704.134.973.403l8.555 8.555 8.555-8.555c.269-.269.593-.403.973-.403s.703.134.972.403.403.593.403.972c0 .38-.134.704-.403.973l-8.555 8.555 8.555 8.555c.269.269.403.593.403.973s-.134.703-.403.972a1.325 1.325 0 0 1-.972.403c-.38 0-.704-.134-.973-.403l-8.555-8.555Z"
            />
          </svg>
        </button>
      )}
    </label>
  );
};

export type DropdownMenuProps = {
  data: DropdownItem[];
  onItemClick: (label: string) => void;
  selectedValue: string | null;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ data, onItemClick, selectedValue }) => {
  return (
    <ul className="connect__dropdown-list-menu" role="listbox">
      {data.map((item, index) => (
        <li
          key={`connect__menu-item-${index}`}
          className={`connect__dropdown-item ${item.disabled ? 'connect__disabled' : ''} ${selectedValue === item.label ? 'connect__selected' : ''}`}
          role="option"
          aria-selected={item.label === selectedValue}
          aria-disabled={item.disabled || false}
          onClick={(event) => {
            event.preventDefault();
            if (!item.disabled) {
              onItemClick(item.label);
            }
          }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

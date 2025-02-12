/* eslint-disable no-console */

import React, { useState } from 'react';
import { Hint } from '../Hint/Hint';
import { GradeBand } from 'src/enum/gradeband';

export type DropdownProps = {
  children: React.ReactNode;
  data: {
    label: string;
    value: React.ReactNode;
    className?: string | null;
    ariaSelected?: boolean;
    disabled?: boolean;
  }[];
  id?: string;
  label?: string;
  selectedValue?: string | null;
  open?: boolean;
  onChange?: (value: string | null) => void;
  onToggle?: (open: boolean) => void;
  onClear?: () => void;
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
  id,
  label,
  selectedValue: controlledSelectedValue,
  open: controlledOpen,
  onChange,
  onToggle,
  onClear,
  hint,
  correct,
  incorrect,
  answerShown,
  disabled = false,
  dataTestId,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalSelectedValue, setInternalSelectedValue] = useState<string | null>(null);

  const open = controlledOpen ?? internalOpen;
  const selectedValue = controlledSelectedValue ?? internalSelectedValue;

  const feedbackStates = [
    correct && 'connect__feedback-correct',
    incorrect && 'connect__feedback-incorrect',
    answerShown && 'connect__feedback-shown',
    open && 'connect__dropdown-open',
    disabled && 'connect__disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (!disabled) {
      setInternalOpen(!open);
      onToggle?.(!open);
      console.log('Dropdown clicked:', { open });
    }
  };

  const handleItemClick = (label: string) => {
    setInternalSelectedValue(label);
    onChange?.(label);
    setInternalOpen(false);
    onToggle?.(false);
    console.log('Item selected:', { label });
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log('Clear button clicked');
    setInternalSelectedValue(null);
    onChange?.(null);
    onClear?.();
  };

  const dropdownData = data.map((item) => ({
    ...item,
    className: null,
    ariaSelected: selectedValue === item.label,
    value: item.label,
  }));

  console.log('Dropdown rendered:', { open, selectedValue, dropdownData });

  return (
    <label className="connect__dropdown-wrapper">
      <div
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
          <DropdownMenu
            data={dropdownData}
            onItemClick={handleItemClick}
            selectedValue={selectedValue}
          />
        </div>
      </div>
      {onClear && selectedValue && (
        <button
          className={`connect__clear-button ${selectedValue ? 'connect__clear-button-visible' : ''}`}
          onClick={handleClear}
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
  data: {
    label: string;
    className: string | null;
    ariaSelected: boolean;
    value: string;
    disabled?: boolean;
  }[];
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
            event.stopPropagation();
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

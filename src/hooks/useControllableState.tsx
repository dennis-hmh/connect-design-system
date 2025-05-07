import { useCallback, useState } from 'react';

type SetStateAction<T> = T | ((prevState: T) => T);

type UseControllableStateProps<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (next: T) => void;
};

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>): [T, React.Dispatch<SetStateAction<T>>] {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);

  const currentValue = isControlled ? value! : internalValue;

  const setValue: React.Dispatch<SetStateAction<T>> = useCallback(
    (next) => {
      const resolved = typeof next === 'function' ? (next as (prev: T) => T)(currentValue) : next;

      if (!isControlled) setInternalValue(resolved);
      onChange?.(resolved);
    },
    [isControlled, currentValue, onChange],
  );

  return [currentValue, setValue];
}

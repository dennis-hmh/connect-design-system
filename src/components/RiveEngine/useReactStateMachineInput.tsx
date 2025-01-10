import { EventType, Rive, StateMachineInput, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';

type StateMachineInputValue = number | boolean;

type SyncHookProps<V> = {
  rive: Rive | null;
  stateMachineInput: StateMachineInput | null;
  value?: V;
  setValue?: (value: V) => void;
};

function useSyncStateMachineInput<V extends StateMachineInputValue>({
  value,
  stateMachineInput,
}: SyncHookProps<V>) {
  const syncStateMachineInput = () => {
    if (value == null || !stateMachineInput) return;
    if (stateMachineInput.value === value) return;

    stateMachineInput.value = value;
  };
  useEffect(syncStateMachineInput, [value]);
}

function useSyncValueState<V>({ rive, stateMachineInput, value, setValue }: SyncHookProps<V>) {
  const syncValueState = () => {
    if (!rive || !setValue) return;

    const riveEventCallback = () => {
      if (!stateMachineInput?.value) return;
      if (stateMachineInput.value === value) return;

      setValue?.(stateMachineInput.value as V);
    };

    rive.on(EventType.RiveEvent, riveEventCallback);
    return () => rive.off(EventType.RiveEvent, riveEventCallback);
  };
  useEffect(syncValueState, [rive, stateMachineInput]);
}

export function useReactStateMachineInput<V extends StateMachineInputValue>(
  rive: Rive | null,
  stateMachineName: string,
  inputName: string,
  value?: V,
  setValue?: (value: V) => void,
): StateMachineInput | null {
  const stateMachineInput = useStateMachineInput(rive, stateMachineName, inputName, value);
  const syncHookProps = { rive, stateMachineInput, value, setValue };

  useSyncStateMachineInput(syncHookProps);
  useSyncValueState(syncHookProps);

  return stateMachineInput;
}

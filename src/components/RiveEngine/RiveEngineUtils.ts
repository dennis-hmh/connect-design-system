/* eslint-disable no-console */

import { MutableRefObject } from 'react';
import {
  StateMachineInput,
  StateMachineInputType,
} from '@rive-app/react-canvas';

/** A general-purpose function for working with Rive StateMachineInputs that have
 *  been exposed onto a useRef() variable (provided to the RiveEngine via the "inputs" prop).
 *  This function is intended to be used by the ancestor of the RiveEngine component.
 *
 * @param newValue  The value to set.
 * @param inputName The name of the State Machine input (check what was exposed onto the "inputs" object, if you're unsure what names are present!)
 * @param inputs    The "useRef()" object that's storing references to the RiveEngine's inputs. This is the same object passed to the RiveEngine via the "inputs" prop!
 */
export function setRiveInputValue(
  newValue: number | boolean,
  inputName: string,
  inputs:
    | MutableRefObject<undefined>
    | { current: { [key: string]: StateMachineInput }; exposed?: boolean },
  reportIfMissing = true,
  reportIfNotYetExposed = false,
) {
  if (!inputs) {
    console.error("Please provide the 'inputs' object (created with useRef)!");
    return;
  }

  //Stop if the inputs have yet to be exposed
  if (inputs.current == undefined || !inputs.exposed) {
    reportIfNotYetExposed && console.error('The inputs have yet to be exposed!');
    return;
  }

  const input = inputs.current[inputName];
  if (!input) {
    if (reportIfMissing)
      console.error(
        `Input "${inputName}" couldn't be found in the current State Machine!\n\nExposed inputs:`,
        inputs.current,
      );
    return;
  }

  //If it's a Trigger-type Input and a nonzero value was provided, interpret this as a fire() request
  if (input.type == StateMachineInputType.Trigger) {
    if (!newValue) return;
    input.fire();
    return { fired: true };
  }
  //If it's a Number or Boolean-type Input, just set a value as usual
  else {
    const prevValue = input.value;
    input.value = newValue;
    return { prevValue, newValue };
  }
}
/** State values for the Timer component, for use when controlling its state via the "parentState" prop */
export enum timerStates {
  waiting_to_start,
  counting_down,
  finished,
  paused,
}
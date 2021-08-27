import * as actions from "../actionTypes";

export const startCount = (secondsToTime) => ({
  type: actions.START_TIMER,
  secondsToTime,
});

export const stopCount = (secondsToTime) => ({
  type: actions.STOP_TIMER,
  secondsToTime,
});

export const resetTimer = () => ({
  type: actions.RESET,
});

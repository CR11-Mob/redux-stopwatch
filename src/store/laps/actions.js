import * as actions from "../actionTypes";

export const addLap = (time) => ({
  type: actions.ADD_LAPS,
  time,
});

export const resetLap = () => ({
  type: actions.RESET,
});

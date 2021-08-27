import * as actions from "../actionTypes";

let initialState = {
  time: { h: 0, m: 0, s: 0 },
  seconds: 0,
  pauseStatus: true,
};

let second = 0;

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.START_TIMER:
      return {
        ...initialState,
        seconds: ++second,
        time: action.secondsToTime(second),
        pauseStatus: false,
      };

    case actions.STOP_TIMER:
      return {
        ...initialState,
        seconds: second,
        time: action.secondsToTime(second),
        pauseStatus: true,
      };

    case actions.RESET:
      return {
        ...initialState,
        time: { h: 0, m: 0, s: 0 },
        seconds: (second = 0),
        pauseStatus: true,
      };

    default:
      return state;
  }
}

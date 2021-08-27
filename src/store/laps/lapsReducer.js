import * as actions from "../actionTypes";

export default function lapsReducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_LAPS:
      return [
        ...state,
        {
          ...action.time,
        },
      ];

    case actions.RESET:
      return [];

    default:
      return state;
  }
}

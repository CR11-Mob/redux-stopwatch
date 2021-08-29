import { combineReducers } from "redux";
import timerReducer from "./timer";
import lapsReducer from "./laps";

export default combineReducers({
  tmr: timerReducer,
  lpr: lapsReducer,
});

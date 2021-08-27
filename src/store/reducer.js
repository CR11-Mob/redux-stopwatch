import { combineReducers } from "redux";
import timerReducer from "./timer/timerReducer";
import lapsReducer from "./laps/lapsReducer";

export default combineReducers({
  tmr: timerReducer,
  lpr: lapsReducer,
});

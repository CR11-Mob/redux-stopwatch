import { combineReducers } from "redux";
import timerReducer from "./timer";
import lapsReducer from "../store/laps";

export default combineReducers({
  tmr: timerReducer,
  lpr: lapsReducer,
});

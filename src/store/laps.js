import { createAction, createReducer } from "@reduxjs/toolkit";

// Action Creators

export const addLap = createAction("addLaps");

export const resetLap = createAction("reset");

// Reducer

export default createReducer([], {
  [addLap.type]: (state, action) => {
    state.push(action.payload.time);
  },

  [resetLap.type]: (state, action) => {
    state = [];
  },
});

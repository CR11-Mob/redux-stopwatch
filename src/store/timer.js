import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let initialState = {
  time: { h: 0, m: 0, s: 0 },
  seconds: 0,
  pauseStatus: true,
};

const slice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startCount: (state, action) => {
      state.seconds++;
      state.time = action.payload.secondsToTime(state.seconds);
      state.pauseStatus = false;
    },

    stopCount: (state, action) => {
      state.pauseStatus = true;
    },

    resetTimer: (state, action) => {
      state.time = { h: 0, m: 0, s: 0 };
      state.seconds = 0;
      state.pauseStatus = true;
    },
  },
});

console.log(slice);

export const { startCount, stopCount, resetTimer } = slice.actions;

export default slice.reducer;

// Action Creators

// export const startCount = createAction("start");

// export const stopCount = createAction("stop");

// export const resetTimer = createAction("reset");

// Reducer

// export default createReducer(initialState, {
//   [startCount.type]: (state, action) => {
//     state.seconds++;
//     state.time = action.payload.secondsToTime(state.seconds);
//     state.pauseStatus = false;
//   },

//   [stopCount.type]: (state, action) => {
//     state.pauseStatus = true;
//     // state.time = action.payload.secondsToTime(state.seconds);
//   },

//   [resetTimer.type]: (state, action) => {
//     state.time = { h: 0, m: 0, s: 0 };
//     state.seconds = 0;
//     state.pauseStatus = true;
//   },
// });

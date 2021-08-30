import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "laps",
  initialState: [],
  reducers: {
    addLap: (state, action) => {
      state.push(action.payload.time);
    },

    resetLap: (state, action) => {
      return [];
    },
  },
});

console.log(slice);

export const { addLap, resetLap } = slice.actions;

export default slice.reducer;

// Action Creators

// export const addLap = createAction("addLaps");

// export const resetLap = createAction("reset");

// Reducer

// export default createReducer([], {
//   [addLap.type]: (state, action) => {
//     state.push(action.payload.time);
//   },

//   [resetLap.type]: (state, action) => {
//     return [];
//   },
// });

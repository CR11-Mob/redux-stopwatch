import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["start"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.secondsToTime"],
        // Ignore these paths in the state
        ignoredPaths: ["state.time"],
      },
    }),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import employeersSlice from "./employeer/reducer";

export const store = configureStore({
  reducer: {
    employeerReducer: employeersSlice.reducer,
    // Other reducers...
  },
});
export type AppDispatch = typeof store.dispatch;

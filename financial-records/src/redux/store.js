import { configureStore } from "@reduxjs/toolkit";
import recordsReducer from "./slices/recordsSlice.js";

const store = configureStore({
  reducer: {
    records: recordsReducer,
  },
});

export default store;

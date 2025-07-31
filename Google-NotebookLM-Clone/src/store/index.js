import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./queryReducer";
import responseReducer from "./responseReducer";
import uploadReducer from "./uploadReducer";

export const store = configureStore({
  reducer: {
    query: queryReducer,
    response: responseReducer,
    upload: uploadReducer,
  },
});

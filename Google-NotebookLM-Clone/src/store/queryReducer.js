import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: "",
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      let newQuestion = action.payload;
      state.question = newQuestion;
    },
  },
});

export const { addQuery } = querySlice.actions;
export default querySlice.reducer;

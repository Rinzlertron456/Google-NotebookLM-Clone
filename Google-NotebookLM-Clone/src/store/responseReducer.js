import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answer: "",
};

const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    addResponse: (state, action) => {
      let newResponse = action.payload;
      state.answer = newResponse;
    },
  },
});

export const { addResponse } = responseSlice.actions;
export default responseSlice.reducer;

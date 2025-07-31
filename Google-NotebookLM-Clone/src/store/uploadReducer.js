import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    uploadUrl: (state, action) => {
      let newUrl = action.payload;
      state.url = newUrl;
    },
  },
});

export const { uploadUrl } = uploadSlice.actions;
export default uploadSlice.reducer;

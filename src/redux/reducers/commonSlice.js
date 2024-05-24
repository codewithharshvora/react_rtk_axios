import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    apiLoading: false,
    error: "",
  },
  reducers: {
    apiLoading: (state, action) => {
      state.apiLoading = action.payload;
    },
    logAPIError: (state, action) => {
      state.apiError = action.payload;
    },
  },
});

export const { apiLoading, logAPIError } = errorSlice.actions;
export default errorSlice.reducer;

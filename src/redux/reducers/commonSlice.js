import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'API',
  initialState: {
    apiLoading: false,
    apiError: '',
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

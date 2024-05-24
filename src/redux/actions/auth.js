import { postData } from '../../api/apiUtils';
import { loginSuccess, loginFailure } from '../reducers/authSlice';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await postData('/login', data);
    thunkAPI.dispatch(loginSuccess(response)); // Dispatch success action
    return response;
  } catch (error) {
    console.log('error', error);
    thunkAPI.dispatch(loginFailure(error)); // Dispatch failure action
    return thunkAPI.rejectWithValue(
      error.response ? error.response.data : error.message,
    );
  }
});

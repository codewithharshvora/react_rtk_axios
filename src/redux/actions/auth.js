// src/actions/auth.js

import { loginSuccess, loginFailure } from "../reducers/authSlice";
import { Axios } from "../../api/config";

export const login = (username, password) => async (dispatch) => {
  try {
    // const response = { data: { token: "test123" } }; // await Axios.post("/login", { username, password });
    const response = await Axios.post("/login", { username, password });

    const token = response.data.token; // Assuming the token is returned from the server
    localStorage.setItem("token", token);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginFailure(error.toString()));
  }
};

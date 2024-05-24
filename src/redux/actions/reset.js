import { resetAll } from "../reducers/resetSlice";

export const reset = () => (dispatch) => {
  dispatch(resetAll());
};

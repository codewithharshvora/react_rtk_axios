// src/components/ResetButton.js
import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../redux/actions/reset";

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  return <button onClick={handleReset}>Reset</button>;
};

export default ResetButton;

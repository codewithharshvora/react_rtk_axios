// src/components/ErrorOverlay.js
import React from "react";
import { useSelector } from "react-redux";

const LoginOverlay = () => {
  const apiLoading = useSelector((state) => state.common.apiLoading);
  console.log("Api Loading", apiLoading);
  return apiLoading ? <div className="error-overlay">Loading....</div> : null;
};

export default LoginOverlay;

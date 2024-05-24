// src/components/ErrorOverlay.js
import React from "react";
import { useSelector } from "react-redux";

const ErrorOverlay = () => {
  const apiError = useSelector((state) => state.common.apiError);

  return apiError ? <div className="error-overlay">{apiError}</div> : null;
};

export default ErrorOverlay;

// src/App.js
import React from 'react';
import Login from './components/Login';
import ErrorOverlay from './components/ErrorOverlay';
import ResetButton from './components/ResetButton';
import LoginOverlay from './components/LoadingOverlay';

const App = () => {
  return (
    <div className="App">
      <Login />
      <ResetButton />
      <LoginOverlay />
      <ErrorOverlay />
    </div>
  );
};

export default App;

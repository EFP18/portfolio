import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
// import * as React from 'react';
import '../styles/DarkMode.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={120}
    />
  );
};

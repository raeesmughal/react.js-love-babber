import { createContext, useContext, useState } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create the Provider Component
// This component will wrap around the parts of our app that need the theme data
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState('#3b82f6'); // Default blue

  // The 'value' object contains everything we want to make globally available
  const value = {
    isDarkMode,
    setIsDarkMode,
    accentColor,
    setAccentColor,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook for easy consumption
// This keeps our component code incredibly clean later!
export const useTheme = () => {
  return useContext(ThemeContext);
};
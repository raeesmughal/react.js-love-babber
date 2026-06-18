import { createContext, useContext, useState } from 'react';

// 1. Create the Context
const TypographyContext = createContext();

// 2. Create the Provider Component
export const TypographyProvider = ({ children }) => {
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [fontSize, setFontSize] = useState('16px');

  // The global values for typography
  const value = {
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
  };

  return (
    <TypographyContext.Provider value={value}>
      {children}
    </TypographyContext.Provider>
  );
};

// 3. Create the custom hook
export const useTypography = () => {
  return useContext(TypographyContext);
};
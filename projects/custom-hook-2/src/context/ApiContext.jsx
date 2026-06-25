import React, { createContext } from 'react';

// 1. Create the Context. This acts as a global container for our data.
export const ApiContext = createContext();

// 2. Create a Provider component. This will wrap our app and supply the data.
export const ApiProvider = ({ children }) => {
  // We define a global setting here (a base URL for an API).
  // In a real app, this might be an environment variable or an auth token.
  const globalConfig = {
    baseUrl: 'https://jsonplaceholder.typicode.com',
  };

  return (
    // 3. We pass 'globalConfig' into the 'value' prop. 
    // Any component inside this Provider can now access this exact data.
    <ApiContext.Provider value={globalConfig}>
      {children}
    </ApiContext.Provider>
  );
};
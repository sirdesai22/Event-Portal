// Create a context with a default value
import React, { createContext, useContext, useEffect, useState } from 'react';

const SharedContext = createContext();

// Create a provider component that wraps your app
export const SharedProvider = ({ children }) => {

  const [sharedVariable, setSharedVariable] = useState(12345);

  useEffect(() => {
    const fetchFundValue = async () => {
      try {
        const response = await fetch('http://localhost:3000/getfund');
        if (response.ok) {
          const data = await response.json();
          setSharedVariable(data.fund); // Assuming the response structure includes a 'fund' property
        } else {
          console.error('Failed to fetch fund value');
        }
      } catch (error) {
        console.error('Error fetching fund value:', error);
      }
    };

    fetchFundValue();
  }, [setSharedVariable]);


  return (
    <SharedContext.Provider value={{ sharedVariable, setSharedVariable }}>
      {children}
    </SharedContext.Provider>
  );
};

// Create a custom hook to access the context
export const useShared = () => {
  return useContext(SharedContext);
};

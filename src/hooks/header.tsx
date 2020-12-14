import React, { createContext, useCallback, useContext, useState } from 'react';

interface HeaderContextData {
  searching: boolean;
  setSearchingValue(value: boolean): void;
}

const HeaderContext = createContext<HeaderContextData>({} as HeaderContextData);

export const HeaderProvider: React.FC = ({ children }) => {
  const [searching, setSearching] = useState(false);

  const setSearchingValue = useCallback((value) => {
    setSearching(value);
  }, []);

  return (
    <HeaderContext.Provider value={{ searching, setSearchingValue }}>
      {children}
    </HeaderContext.Provider>
  );
};

export function useHeader(): HeaderContextData {
  const context = useContext(HeaderContext);
  return context;
}

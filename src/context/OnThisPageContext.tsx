import React, { createContext, useContext, useState } from 'react';
// Create a Context
const OnThisPageContext = createContext<{
  scrollPercentage: number | null;
  setScrollPercentage: (scrollPercentage: number) => void;
}>({
  scrollPercentage: 0,
  setScrollPercentage: _ => {},
});

type OnThisPageProps = {
  children: React.ReactNode;
};

// Create a Context Provider
export const OnThisPageContextProvider = ({ children }: OnThisPageProps) => {
  const [scrollPercentage, setInternalScrollPercentage] = useState<null | number>(null);

  const setScrollPercentage = (val: number) => {
    console.log('internal scroll percentage: ', val);
    setInternalScrollPercentage(val);
  };

  return (
    <OnThisPageContext.Provider value={{ scrollPercentage, setScrollPercentage }}>
      {children}
    </OnThisPageContext.Provider>
  );
};

// Custom Hook to Access the Context
export const useOnThisPage = () => {
  return useContext(OnThisPageContext);
};

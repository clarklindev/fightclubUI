import React, { createContext, useContext, useState } from 'react';
import { scrollToPercentage } from '@swagfinger/utils/scrollToPercentage';
import { getDocumentScrollPercentage } from '@swagfinger/utils/getDocumentScrollPercentage';

const ScrollContext = createContext<{
  scrollPercentage: number | null;
  setScrollPercentage: (scrollPercentage: number) => void;
  scrollToPercentage: (scrollableElement: React.RefObject<HTMLElement>, percentage: number) => void;
  getDocumentScrollPercentage: () => number;
}>({
  scrollPercentage: null,
  setScrollPercentage: _ => {},
  scrollToPercentage: _ => {},
  getDocumentScrollPercentage: () => 0,
});

// Custom Hook to Access the Context
export const useScroll = () => {
  return useContext(ScrollContext);
};

type ScrollContextProviderProps = {
  children: React.ReactNode;
};
export const ScrollContextProvider = ({ children }: ScrollContextProviderProps) => {
  const [scrollPercentage, setInternalScrollPercentage] = useState<null | number>(null);

  const setScrollPercentage = (val: number) => {
    setInternalScrollPercentage(val);
  };

  return (
    <ScrollContext.Provider
      value={{ scrollPercentage, setScrollPercentage, scrollToPercentage, getDocumentScrollPercentage }}>
      {children}
    </ScrollContext.Provider>
  );
};

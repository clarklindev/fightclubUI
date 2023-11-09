import React, { createContext, useContext, useState } from 'react';

interface OnThisPageContextType {
  observablesInView: boolean[] | null;
  setObservablesInView: (_: boolean[]) => void;
  observables: Array<HTMLElement> | null;
  setObservables: (_: Array<HTMLElement>) => void;
}

// Create a Context

const OnThisPageContext = createContext<OnThisPageContextType>({
  observablesInView: [], // Initialize with an empty array
  setObservablesInView: _ => {},
  observables: [],
  setObservables: _ => {},
});

type OnThisPageProps = {
  children: React.ReactNode;
};

// Create a Context Provider
export const OnThisPageContextProvider = ({ children }: OnThisPageProps) => {
  const [observablesInView, setObservablesInView] = useState<boolean[] | null>(null);
  const [observables, setObservables] = useState<HTMLElement[]>([]);

  return (
    <OnThisPageContext.Provider
      value={{
        observablesInView,
        setObservablesInView,
        observables,
        setObservables,
      }}>
      {children}
    </OnThisPageContext.Provider>
  );
};

// Custom Hook to Access the Context
export const useOnThisPage = () => {
  return useContext(OnThisPageContext);
};

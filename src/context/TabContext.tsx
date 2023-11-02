import React, { createContext, useContext, useState } from 'react';

import { TabData } from '../components/Tabs';

type TabsContextProviderProps = {
  children: React.ReactNode;
};

const TabsContext = createContext<{
  selectedTabIndex: number;
  selectTab: (index: number) => void;
  data: Array<TabData>;
  setData: (data: Array<TabData>) => void;
}>({
  selectedTabIndex: 0,
  selectTab: (_updatedIndex: number) => {
    // console.log(newSelected);
  },
  data: [],
  setData: _ => {},
});

// Custom Hook to Access the Context
export const useTabs = () => {
  return useContext(TabsContext);
};

// Create a Context Provider
export const TabsContextProvider = ({ children }: TabsContextProviderProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [data, setData] = useState<Array<TabData>>([]);

  const selectTab = (updatedIndex: number) => {
    setSelectedTabIndex(updatedIndex);
  };

  return (
    <TabsContext.Provider
      value={{
        selectedTabIndex,
        selectTab,
        data,
        setData,
      }}>
      {children}
    </TabsContext.Provider>
  );
};

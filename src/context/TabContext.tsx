import React, { createContext, useContext, useState } from 'react';

type Header = {
  name: string;
  description: string;
};

type TabsContextProviderProps = {
  children: React.ReactNode;
};

const tabsData: Header[] = [
  { name: 'tab1', description: 'content for tab 1' },
  { name: 'tab2', description: 'content for tab 2' },
  { name: 'tab3', description: 'content for tab 3' },
];

const TabsContext = createContext({
  selectedTabIndex: 0,
  selectTab: (updatedIndex: number) => {
    // console.log(newSelected);
  },
  headers: tabsData.map(each => {
    return each.name;
  }),
  selectedDetails: '',
});

// Custom Hook to Access the Context
export const useTabs = () => {
  return useContext(TabsContext);
};

// Create a Context Provider
export const TabsContextProvider = ({ children }: TabsContextProviderProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const selectTab = (updatedIndex: number) => {
    setSelectedTabIndex(updatedIndex);
  };

  const headers = tabsData.map(each => each.name);
  console.log('headers: ', headers);

  return (
    <TabsContext.Provider
      value={{
        selectedTabIndex,
        selectTab,
        headers,
        selectedDetails: tabsData[selectedTabIndex].description,
      }}>
      {children}
    </TabsContext.Provider>
  );
};

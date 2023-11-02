import React from 'react';
import { useTabs, TabsContextProvider } from '../../context/TabContext';

type TabsProps = {
  children: React.ReactNode;
};

const Tabs = ({ children }: TabsProps) => {
  return <TabsContextProvider>{children}</TabsContextProvider>;
};

type TabProps = {
  name: string;
  handleClick: () => void;
  selected: boolean;
};

const TabHeaders = () => {
  const { selectedTabIndex, headers, selectTab } = useTabs();
  const tabHeaders = headers.map((header, index) => {
    return (
      <Tab
        key={index}
        name={header}
        selected={selectedTabIndex === index}
        handleClick={() => {
          console.log('clicked');
          selectTab(index);
        }}
      />
    );
  });

  return <div className="tabheader flex flex-row gap-2 py-1">{tabHeaders}</div>;
};

const Tab = ({ name, handleClick, selected }: TabProps) => {
  const className = selected ? 'tab data-selected border-b border-red-500' : 'tab border-b border-transparent';

  return (
    <button onClick={handleClick} className={`${className}`}>
      {name}
    </button>
  );
};

const TabDetails = () => {
  const { tabDetails } = useTabs();

  return (
    <div className="details">
      <div>{tabDetails}</div>
    </div>
  );
};

Tabs.TabDetails = TabDetails;
Tabs.TabHeaders = TabHeaders;

export { Tabs };

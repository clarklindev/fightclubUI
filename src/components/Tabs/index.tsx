import React, { ReactNode, useEffect } from 'react';
import { useTabs, TabsContextProvider } from '@swagfinger/context/TabContext';

const Tabs = ({ children }: { children: React.ReactNode }) => {
  return <TabsContextProvider>{children}</TabsContextProvider>;
};

export type TabData = {
  label: string;
  content: React.ReactNode;
};

type TabWrapperProps = {
  data: TabData[];
  children: ReactNode;
};

const TabWrapper: React.FC<TabWrapperProps> = ({ data, children }) => {
  const { setData } = useTabs();

  useEffect(() => {
    setData(data);
  }, [data]);

  return <>{children}</>;
};

const TabHeaders = () => {
  const { selectedTabIndex, selectTab, data } = useTabs();

  let tabHeaders = null;

  if (data?.length) {
    tabHeaders = data.map(({ label }, index) => (
      <Tab
        key={index}
        label={label}
        selected={selectedTabIndex === index}
        handleClick={() => {
          console.log('clicked');
          selectTab(index);
        }}
      />
    ));
  }

  return <div className="tabheader flex flex-row gap-2 py-1">{tabHeaders}</div>;
};

type TabProps = {
  label: string;
  handleClick: () => void;
  selected: boolean;
};
const Tab = ({ label, handleClick, selected }: TabProps) => {
  const className = selected ? 'tab data-selected border-b-2 border-red-500' : 'tab border-b border-transparent';

  return (
    <button onClick={handleClick} className={`${className}`}>
      {label}
    </button>
  );
};

const TabContent = () => {
  const { data, selectedTabIndex } = useTabs();
  const tabContent = data[selectedTabIndex]?.content;

  return (
    <div className="content">
      <div>{tabContent}</div>
    </div>
  );
};

Tabs.TabWrapper = TabWrapper;
Tabs.TabHeaders = TabHeaders;
Tabs.TabContent = TabContent;

export { Tabs };

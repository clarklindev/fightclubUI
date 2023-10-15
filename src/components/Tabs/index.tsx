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

const Tab = ({ name, handleClick, selected }: TabProps) => {
  const classNames = selected ? 'tab tab-selected' : 'tab';

  return (
    <button onClick={handleClick} className={classNames} style={{ padding: '10px 5px', border: '1px solid red' }}>
      {name}
    </button>
  );
};

const TabDetails = () => {
  const { selectedDetails } = useTabs();

  return (
    <div className="details">
      <div>{selectedDetails}</div>
    </div>
  );
};

const TabHeaders = () => {
  const { selectedTabIndex, headers, selectTab } = useTabs();

  console.log('headers:', headers);

  const tabHeaders = headers.map((header, index) => {
    console.log('header: ', header);
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

  return <div className="tabheader">{tabHeaders}</div>;
};

Tabs.TabDetails = TabDetails;
Tabs.TabHeaders = TabHeaders;

export { Tabs };

import React from 'react';
import { TabData } from '../components/Tabs';
type TabsContextProviderProps = {
    children: React.ReactNode;
};
export declare const useTabs: () => {
    selectedTabIndex: number;
    selectTab: (index: number) => void;
    data: Array<TabData>;
    setData: (data: Array<TabData>) => void;
};
export declare const TabsContextProvider: ({ children }: TabsContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TabContext.d.ts.map
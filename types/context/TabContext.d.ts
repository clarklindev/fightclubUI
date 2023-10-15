import React from 'react';
type TabsContextProviderProps = {
    children: React.ReactNode;
};
export declare const useTabs: () => {
    selectedTabIndex: number;
    selectTab: (_updatedIndex: number) => void;
    headers: string[];
    selectedDetails: string;
};
export declare const TabsContextProvider: ({ children }: TabsContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TabContext.d.ts.map
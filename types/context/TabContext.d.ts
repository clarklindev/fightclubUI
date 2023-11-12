import React from 'react';
interface TabContextProps {
    selectedTabId: string | undefined;
    setSelectedTabId: (id: string) => void;
}
export declare const useTabs: () => TabContextProps;
type TabsContextProviderProps = {
    children: React.ReactNode;
};
export declare const TabsContextProvider: ({ children }: TabsContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TabContext.d.ts.map
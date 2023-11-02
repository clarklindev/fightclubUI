import React, { ReactNode } from 'react';
declare const Tabs: {
    ({ children }: {
        children: React.ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    TabWrapper: React.FC<TabWrapperProps>;
    TabHeaders: () => import("react/jsx-runtime").JSX.Element;
    TabContent: () => import("react/jsx-runtime").JSX.Element;
};
export type TabData = {
    label: string;
    content: React.ReactNode;
};
type TabWrapperProps = {
    data: TabData[];
    children: ReactNode;
};
export { Tabs };
//# sourceMappingURL=index.d.ts.map
import React, { ReactNode } from 'react';
declare const Tabs: {
    ({ children }: {
        children: React.ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    TriggerGroup: ({ children, className }: {
        className?: string | undefined;
        children?: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Trigger: ({ children, ...rest }: TriggerProps) => import("react/jsx-runtime").JSX.Element;
    ContentGroup: ({ children, className }: {
        children: React.ReactNode;
        className?: string | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children, ...rest }: {
        children?: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
type TriggerProps = {
    children?: string;
};
export { Tabs };
//# sourceMappingURL=index.d.ts.map
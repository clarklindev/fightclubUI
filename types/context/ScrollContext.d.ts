import React from 'react';
export declare const useScroll: () => {
    scrollPercentage: number | null;
    setScrollPercentage: (scrollPercentage: number) => void;
    scrollToPercentage: (scrollableElement: React.RefObject<HTMLElement>, percentage: number) => void;
    getDocumentScrollPercentage: () => number;
};
type ScrollContextProviderProps = {
    children: React.ReactNode;
};
export declare const ScrollContextProvider: ({ children }: ScrollContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ScrollContext.d.ts.map
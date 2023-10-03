import React from 'react';
type SideMenuProviderProps = {
    children: React.ReactNode;
};
export declare const SideMenuContextProvider: ({ children }: SideMenuProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useSideMenu: () => {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
};
export {};
//# sourceMappingURL=SidemenuContext.d.ts.map
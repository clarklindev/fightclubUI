import React from 'react';
type MenuProviderProps = {
    children: React.ReactNode;
};
export declare const MenuContextProvider: ({ children }: MenuProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useMenu: () => {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
};
export {};
//# sourceMappingURL=MenuContext.d.ts.map
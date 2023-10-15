import React from 'react';
export declare const useDropdown: () => {
    isFocused: boolean;
    onBlur: () => void;
    onFocus: () => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (_bool: boolean) => void;
    handleMouseOver: () => void;
    handleMouseLeave: () => void;
};
type DropdownContextProviderProps = {
    children: React.ReactNode;
};
export declare const DropdownContextProvider: ({ children }: DropdownContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DropdownContext.d.ts.map
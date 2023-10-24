import React from 'react';
export declare const useDropdown: () => {
    isFocused: boolean;
    onBlur: () => void;
    onFocus: () => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    handleMouseOver: () => void;
    handleMouseLeave: () => void;
    triggerRef: React.RefObject<React.ReactNode | HTMLElement> | null;
    setTriggerRef: (buttonRef: React.RefObject<React.ReactNode | HTMLElement>) => void;
    menuRef: React.RefObject<React.ReactNode | HTMLElement> | null;
    setMenuRef: (menuRef: React.RefObject<React.ReactNode | HTMLElement>) => void;
    menuOrientationX: string | null;
    setMenuOrientationX: (orientation: string) => void;
    menuOrientationY: string | null;
    setMenuOrientationY: (orientation: string) => void;
    menuBoundsObject: DOMRect;
    setMenuBoundsObject: (obj: DOMRect) => void;
    triggerBoundsObject: DOMRect;
    setTriggerBoundsObject: (obj: DOMRect) => void;
};
type DropdownContextProviderProps = {
    children: React.ReactNode;
};
export declare const DropdownContextProvider: ({ children }: DropdownContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DropdownContext.d.ts.map
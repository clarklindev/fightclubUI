import React, { createContext, useContext, useState } from 'react';
import { useFocus, useMenu } from '../customhooks';

// Create a Context
const DropdownContext = createContext<{
  isFocused: boolean;
  onBlur: () => void;
  onFocus: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleMouseOver: () => void;
  handleMouseLeave: () => void;
  dropdownRef: React.RefObject<React.ReactNode | HTMLElement> | null;
  setDropdownRef: (dropdownRef: React.RefObject<React.ReactNode | HTMLElement>) => void;
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
}>({
  isFocused: false,
  onBlur: () => {},
  onFocus: () => {},
  isMenuOpen: false,
  setIsMenuOpen: _ => {},
  handleMouseOver: () => {},
  handleMouseLeave: () => {},
  dropdownRef: null,
  setDropdownRef: _ => {},
  triggerRef: null,
  setTriggerRef: _ => {},
  menuRef: null,
  setMenuRef: _ => {},
  menuOrientationX: null,
  setMenuOrientationX: _ => {},
  menuOrientationY: null,
  setMenuOrientationY: _ => {},
  menuBoundsObject: {} as DOMRect,
  setMenuBoundsObject: _ => {},
  triggerBoundsObject: {} as DOMRect,
  setTriggerBoundsObject: _ => {},
});

// Custom Hook to Access the Context
export const useDropdown = () => {
  return useContext(DropdownContext);
};

type DropdownContextProviderProps = {
  children: React.ReactNode;
};

// Create a Context Provider
export const DropdownContextProvider = ({ children }: DropdownContextProviderProps) => {
  const { isFocused, onBlur, onFocus } = useFocus();
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const [triggerRef, setTriggerRef] = useState<React.RefObject<React.ReactNode | HTMLElement> | null>(null);
  const [menuRef, setMenuRef] = useState<React.RefObject<React.ReactNode | HTMLElement> | null>(null);
  const [dropdownRef, setDropdownRef] = useState<React.RefObject<React.ReactNode | HTMLElement> | null>(null);

  const [menuOrientationX, setMenuOrientationX] = useState<null | string>(null);
  const [menuOrientationY, setMenuOrientationY] = useState<null | string>(null);
  const [menuBoundsObject, setMenuBoundsObject] = useState<DOMRect>({} as DOMRect);
  const [triggerBoundsObject, setTriggerBoundsObject] = useState<DOMRect>({} as DOMRect);

  const handleMouseOver = () => {
    onFocus();
    setIsMenuOpen(true);
  };

  const handleMouseLeave = async () => {
    onBlur();
  };

  return (
    <DropdownContext.Provider
      value={{
        isFocused,
        onBlur,
        onFocus,
        isMenuOpen,
        setIsMenuOpen,
        handleMouseOver,
        handleMouseLeave,
        dropdownRef,
        setDropdownRef,
        triggerRef,
        setTriggerRef,
        menuRef,
        setMenuRef,
        menuOrientationX,
        setMenuOrientationX,
        menuOrientationY,
        setMenuOrientationY,
        menuBoundsObject,
        setMenuBoundsObject,
        triggerBoundsObject,
        setTriggerBoundsObject,
      }}>
      {children}
    </DropdownContext.Provider>
  );
};

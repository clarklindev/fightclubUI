import React, { createContext, useContext, useState, useRef } from 'react';
import { useFocus, useMenu } from '../customhooks';

import { Quadrant } from '../utils/getQuadrant';

// Create a Context
const DropdownContext = createContext<{
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
}>({
  isFocused: false,
  onBlur: () => {},
  onFocus: () => {},
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  handleMouseOver: () => {},
  handleMouseLeave: () => {},
  triggerRef: null,
  setTriggerRef: _buttonRef => {},
  menuRef: null,
  setMenuRef: _menuRef => {},
  menuOrientationX: null,
  setMenuOrientationX: () => {},
  menuOrientationY: null,
  setMenuOrientationY: () => {},
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
  const [quadrant, setQuadrant] = useState(Quadrant.TL);
  const [triggerRef, setTriggerRef] = useState<React.RefObject<React.ReactNode | HTMLElement> | null>(null);
  const [menuRef, setMenuRef] = useState<React.RefObject<React.ReactNode | HTMLElement> | null>(null);
  const [menuOrientationX, setMenuOrientationX] = useState<null | string>(null);
  const [menuOrientationY, setMenuOrientationY] = useState<null | string>(null);

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
        triggerRef,
        setTriggerRef,
        menuRef,
        setMenuRef,
        menuOrientationX,
        setMenuOrientationX,
        menuOrientationY,
        setMenuOrientationY,
      }}>
      {children}
    </DropdownContext.Provider>
  );
};

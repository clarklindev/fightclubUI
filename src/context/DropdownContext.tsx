import React, { createContext, useContext } from 'react';
import { useFocus, useMenu } from '../customhooks';

// Create a Context
const DropdownContext = createContext({
  isFocused: false,
  onBlur: () => {},
  onFocus: () => {},
  isMenuOpen: false,
  setIsMenuOpen: (bool: boolean) => {},
  handleMouseOver: () => {},
  handleMouseLeave: () => {},
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

  const handleMouseOver = () => {
    onFocus();
    setIsMenuOpen(true);
  };

  const handleMouseLeave = async () => {
    onBlur();
  };

  return (
    <DropdownContext.Provider
      value={{ isFocused, onBlur, onFocus, isMenuOpen, setIsMenuOpen, handleMouseOver, handleMouseLeave }}>
      {children}
    </DropdownContext.Provider>
  );
};

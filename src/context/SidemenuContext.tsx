import React, { createContext, useContext, useState } from 'react';

// Create a Context
const SideMenuContext = createContext({
  isOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

type SideMenuProviderProps = {
  children: React.ReactNode;
};

// Create a Context Provider
export const SideMenuProvider = ({ children }: SideMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return <SideMenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>{children}</SideMenuContext.Provider>;
};

// Custom Hook to Access the Context
export const useSideMenu = () => {
  return useContext(SideMenuContext);
};

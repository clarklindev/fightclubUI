import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useSideMenu } from '../../context/SidemenuContext';

type CustomNavLink = {
  to: string;
  children: React.ReactNode;
};

export const CustomNavLink = ({ to, children }: CustomNavLink) => {
  const { closeMenu } = useSideMenu();

  return (
    <NavLink to={to} onClick={closeMenu}>
      {children}
    </NavLink>
  );
};

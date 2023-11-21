import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useMenu } from '@swagfinger/context/MenuContext';

type CustomNavLink = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const CustomNavLink = ({ to, children, className }: CustomNavLink) => {
  const { closeMenu } = useMenu();

  return (
    <NavLink className={className} to={to} onClick={closeMenu}>
      {children}
    </NavLink>
  );
};

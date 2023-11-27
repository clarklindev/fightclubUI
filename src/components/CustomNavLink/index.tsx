import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useMenu } from '@swagfinger/context/MenuContext';

type CustomNavLink = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const CustomNavLink = ({ to, children, className }: CustomNavLink) => {
  const { closeMenu } = useMenu();

  return (
    <div data-component={CustomNavLink.displayName}>
      <NavLink className={className} to={to} onClick={closeMenu}>
        {children}
      </NavLink>
    </div>
  );
};

CustomNavLink.displayName = 'CustomNavLink';
export { CustomNavLink };

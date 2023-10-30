import React, { useRef, useEffect, useLayoutEffect, RefObject } from 'react';

import styled from 'styled-components';

const StyledNavbar = styled.header`
  grid-area: navbar;
  position: fixed;
  top: 0;
  z-index: 1;

  background: var(--clr-background);
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;

  @media (min-width: 768px) {
    border-bottom: 1px solid var(--border-color);
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }

  @media (min-width: 1200px) {
    padding: 0 6rem;
  }

  @media (min-width: 2400px) {
    max-width: 2400px;
  }
`;

const Navbar = ({ children, className }: { className?: string; children?: React.ReactNode }) => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (navbarRef.current) {
      if (document.body.scrollHeight > window.innerHeight) {
        navbarRef.current.style.width = `${window.innerWidth}px`;
      } else {
        navbarRef.current.style.width = `100%`;
      }
    }
  });

  return (
    <StyledNavbar ref={navbarRef} className={className}>
      {children}
    </StyledNavbar>
  );
};

const Group = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

Navbar.Group = Group;
export { Navbar };

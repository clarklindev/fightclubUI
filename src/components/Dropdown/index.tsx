import React, { useState, useEffect, useRef, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { useDropdown, DropdownContextProvider } from '../../context/DropdownContext';
import { Button } from '../../components';
import { getQuadrantWithRespectToViewport } from '../../utils/getQuadrant';

const StyledDropdownWrapper = styled.div`
  tabindex: -1;
  display: inline-block;
  background: pink;
  position: relative;
`;

const StyledDropdownMenu = styled.div`
  tabindex:-1;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction:column;
  margin-top: 5px;
  gap: 5px;
  border-radius: 5px;
  padding 5px 5px;
  position: absolute;
  right:0;
  background: red;
  cursor: pointer;
  z-index: 10;

`;

const StyledDropdownMenuItem = styled.button`
  min-width: 120px;
  min-height: 36px;
  padding: 5px;
  tabindex: -1;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  border-radius: 5px;
`;

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownContextProvider>
      <DropdownWrapper>{children}</DropdownWrapper>
    </DropdownContextProvider>
  );
};

const DropdownWrapper = ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isFocused, onBlur, setIsMenuOpen } = useDropdown();

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onBlur();
      }
    };
    document.addEventListener('keydown', keyboardHandler);
    return () => {
      document.removeEventListener('keydown', keyboardHandler);
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    // Set a timeout to update isMenuOpen after 400ms
    timeoutId = setTimeout(() => {
      setIsMenuOpen(isFocused);
      //actually call blur
    }, 300);

    // Cleanup the timeout if the component unmounts or isFocused changes again
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isFocused]);

  return <StyledDropdownWrapper>{children}</StyledDropdownWrapper>;
};

const DropdownTrigger = ({ onClick, children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isFocused, onFocus, onBlur, handleMouseOver, handleMouseLeave } = useDropdown();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      !isFocused ? buttonRef.current.blur() : buttonRef.current.focus();
    }
  }, [isFocused]);

  return (
    <Button
      ref={buttonRef}
      onClick={e => {
        onClick && onClick(e);
        console.log('clicked');
        const quad = getQuadrantWithRespectToViewport(e.target as HTMLElement);
        console.log('quad:', quad);

        onFocus();
      }}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>)}>
      {children}
    </Button>
  );
};

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const { isMenuOpen, handleMouseOver, handleMouseLeave } = useDropdown();
  return (
    isMenuOpen && (
      <StyledDropdownMenu onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
        {children}
      </StyledDropdownMenu>
    )
  );
};

const DropdownMenuItem = ({ children }: { children: React.ReactNode }) => {
  const { onFocus, setIsMenuOpen, onBlur } = useDropdown();
  const [quadrant, setQuadrant] = useState();

  return (
    <StyledDropdownMenuItem
      onFocus={() => {
        setIsMenuOpen(true);
        onFocus();
      }}
      onClick={() => {
        onBlur();
      }}>
      {children}
    </StyledDropdownMenuItem>
  );
};

Dropdown.DropdownTrigger = DropdownTrigger;
Dropdown.DropdownMenu = DropdownMenu;
Dropdown.DropdownMenuItem = DropdownMenuItem;

export { Dropdown };

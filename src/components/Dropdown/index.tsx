import React, { forwardRef, useEffect, useRef, ButtonHTMLAttributes } from 'react';

import { useDropdown, DropdownContextProvider } from '../../context/DropdownContext';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Position } from '../../utils/position';

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return <DropdownContextProvider>{children}</DropdownContextProvider>;
};

const DropdownWrapper = ({ children }: { children: React.ReactNode }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { menuRef, onBlur, setMenuOrientationX, isMenuOpen } = useDropdown();

  useEffect(() => {
    setMenuOrientationX(Position.RIGHT);

    if (isMenuOpen && menuRef?.current) {
      const viewHeight = window.innerHeight;
      const viewWidth = window.innerWidth;

      console.log('viewHeight: ', viewHeight);
      console.log('viewWidth: ', viewWidth);

      const menuBounds = (menuRef.current as HTMLElement).getBoundingClientRect();
      console.log('menuBounds: ', menuBounds);

      console.log(`menuBounds.x (${menuBounds.x})`);
      console.log(`menuBounds.width (${menuBounds.width})`);

      console.log(`viewWidth: ${viewWidth} | menu: ${menuBounds.x + menuBounds.width}`);

      const scrollbarWidth = 50;
      if (menuBounds.x + menuBounds.width + scrollbarWidth > viewWidth) {
        setMenuOrientationX(Position.LEFT);
      }
    }
  }, [menuRef, isMenuOpen]);

  const positionCheck = () => {};

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onBlur();
      }
    };
    positionCheck();

    document.addEventListener('keydown', keyboardHandler);
    document.addEventListener('scroll', positionCheck);

    return () => {
      document.removeEventListener('keydown', keyboardHandler);
      document.removeEventListener('scroll', positionCheck);
    };
  }, []);

  return (
    <div className="inline-block relative" ref={dropdownRef}>
      {children}
    </div>
  );
};

const DropdownTrigger = ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isFocused, setIsMenuOpen, onFocus, onBlur, handleMouseOver, handleMouseLeave, setTriggerRef } = useDropdown();
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerRef(triggerRef);
    }
  }, [triggerRef]);

  useEffect(() => {
    if (triggerRef?.current) {
      !isFocused ? triggerRef.current.blur() : triggerRef.current.focus();
    }

    let timeoutId: NodeJS.Timeout | undefined;

    // Set a timeout to update isMenuOpen after 400ms
    timeoutId = setTimeout(() => {
      setIsMenuOpen(isFocused);
      //actually call blur
    }, 300);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isFocused]);

  return (
    <Button
      ref={triggerRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>)}>
      {children}
    </Button>
  );
};

const DropdownMenu = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { isMenuOpen, handleMouseOver, handleMouseLeave, setMenuRef, menuOrientationX } = useDropdown();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (menuRef.current) {
      setMenuRef(menuRef);
    }
  }, [menuRef]);

  return (
    <div
      ref={menuRef}
      className={`
      
      ${isMenuOpen ? 'block' : 'hidden'} 
      ${menuOrientationX === Position.LEFT ? 'right-0 ' : 'left-0'} 
      
      tabindex:-1 border-2 flex flex-col mt-1 gap-1 rounded absolute bg-blue-500 cursor-pointer p-2 z-10 w-32
      
       ${className ? className : ''}
      `}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
};

const DropdownMenuItem = ({
  children,
  asChild,
  onClick,
}: {
  children: React.ReactNode;
  asChild?: boolean;
  onClick?: () => void;
}) => {
  const { onFocus, setIsMenuOpen, onBlur } = useDropdown();
  const navigate = useNavigate();

  return asChild ? (
    <>{children}</>
  ) : (
    <button
      className="p-1 tabindex:-1 bg-green-300 hover:bg-opacity-30 rounded min-w-120"
      onFocus={() => {
        setIsMenuOpen(true);
        onFocus();
      }}
      onClick={() => {
        onBlur();

        if (onClick) {
          console.log('onClick');
          onClick();
        }
      }}>
      {children}
    </button>
  );
};

Dropdown.DropdownWrapper = DropdownWrapper;
Dropdown.DropdownTrigger = DropdownTrigger;
Dropdown.DropdownMenu = DropdownMenu;
Dropdown.DropdownMenuItem = DropdownMenuItem;

export { Dropdown };

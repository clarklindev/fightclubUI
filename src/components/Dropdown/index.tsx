import React, { forwardRef, useState, useEffect, useRef, ButtonHTMLAttributes } from 'react';

import { useDropdown, DropdownContextProvider } from '../../context/DropdownContext';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Position } from '../../utils/position';

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return <DropdownContextProvider>{children}</DropdownContextProvider>;
};

const DropdownWrapper = ({ children }: { children: React.ReactNode }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { menuRef, onBlur, setMenuOrientationX, setMenuOrientationY, isMenuOpen, setMenuBoundsObject } = useDropdown();

  useEffect(() => {
    setMenuOrientationX(Position.RIGHT);
    setMenuOrientationY(Position.BOTTOM);
    if (isMenuOpen && menuRef?.current) {
      const viewHeight = window.innerHeight;
      const viewWidth = window.innerWidth;

      // console.log('viewHeight: ', viewHeight);
      // console.log('viewWidth: ', viewWidth);

      const menuBounds: DOMRect = (menuRef.current as HTMLElement).getBoundingClientRect();
      console.log('type: ', typeof menuBounds);
      setMenuBoundsObject(menuBounds);
      // console.log('menuBounds: ', menuBounds);

      // console.log(`menuBounds.x (${menuBounds.x})`);
      // console.log(`menuBounds.width (${menuBounds.width})`);

      // console.log(`viewWidth: ${viewWidth} | menu: ${menuBounds.x + menuBounds.width}`);

      const scrollbarWidth = 50;
      if (menuBounds.x + menuBounds.width + 50 > viewWidth) {
        setMenuOrientationX(Position.LEFT);
      }

      if (menuBounds.y + menuBounds.height + 50 > viewHeight) {
        setMenuOrientationY(Position.TOP);
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
    <div className="relative" ref={dropdownRef}>
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
      className={'block'}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>)}>
      {children}
    </Button>
  );
};

const DropdownMenu = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const {
    isMenuOpen,
    handleMouseOver,
    handleMouseLeave,
    setMenuRef,
    menuOrientationX,
    menuOrientationY,
    menuBoundsObject,
  } = useDropdown();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [menuHeight, setMenuHeight] = useState<number>();

  useEffect(() => {
    if (menuRef.current) {
      setMenuRef(menuRef);
    }
  }, [menuRef]);

  useEffect(() => {
    if (menuBoundsObject.height) {
      setMenuHeight(Math.round(menuBoundsObject?.height));
    }
  }, [menuBoundsObject]);

  return (
    <div
      ref={menuRef}
      style={
        menuHeight && menuOrientationY === Position.TOP
          ? {
              // Use the style attribute to apply dynamic styles
              transform: `translateY(-${menuHeight + 2}px)`,
            }
          : {}
      }
      className={`
      
      ${isMenuOpen ? 'block' : 'hidden'} 
      ${menuOrientationX === Position.LEFT ? 'right-0 ' : 'left-0'} 
      ${menuOrientationY === Position.TOP ? 'top-0 bot-0' : 'mt-1'}
      
      tabindex:-1 border-2 flex flex-col gap-1 rounded absolute bg-blue-500 cursor-pointer p-2 z-10 w-32 
      
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

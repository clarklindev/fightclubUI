import React, { useState, useEffect, useRef, ButtonHTMLAttributes } from 'react';

import { useDropdown, DropdownContextProvider } from '../../context/DropdownContext';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Position } from '../../utils/position';

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return <DropdownContextProvider>{children}</DropdownContextProvider>;
};

const DropdownWrapper = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { onBlur } = useDropdown();

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

  return (
    <div className="relative flex" ref={dropdownRef} style={style}>
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
    menuOrientationX,
    menuOrientationY,
    menuBoundsObject,
    triggerBoundsObject,
    triggerRef,
    setMenuOrientationX,
    setMenuOrientationY,
    setMenuBoundsObject,
    setTriggerBoundsObject,
  } = useDropdown();

  const menuRef = useRef<HTMLDivElement | null>(null);

  const [menuHeight, setMenuHeight] = useState<number | undefined>();
  const [triggerHeight, setTriggerHeight] = useState<number | undefined>();

  useEffect(() => {
    if (menuBoundsObject.height) {
      setMenuHeight(Math.round(menuBoundsObject?.height));
    }
  }, [menuBoundsObject.height]);

  useEffect(() => {
    if (triggerBoundsObject.height) {
      setTriggerHeight(Math.round(triggerBoundsObject?.height));
    }
  }, [triggerBoundsObject.height]);

  useEffect(() => {
    const viewHeight = window.innerHeight;
    const viewWidth = window.innerWidth;
    const scrollbarThickness = 50;
    setMenuOrientationX(Position.RIGHT);
    setMenuOrientationY(Position.BOTTOM);

    if (isMenuOpen && menuRef?.current && triggerRef?.current) {
      const menuBounds: DOMRect = (menuRef.current as HTMLElement).getBoundingClientRect();
      setMenuBoundsObject(menuBounds);
      const triggerBounds: DOMRect = (triggerRef.current as HTMLElement).getBoundingClientRect();
      setTriggerBoundsObject(triggerBounds);

      if (triggerBounds.x + menuBounds.width + scrollbarThickness > viewWidth) {
        setMenuOrientationX(Position.LEFT);
      }
      if (menuBounds.y + menuBounds.height + scrollbarThickness > viewHeight) {
        setMenuOrientationY(Position.TOP);
      }
    }
  }, [isMenuOpen, menuRef.current, triggerRef?.current]);

  return (
    <div
      ref={menuRef}
      style={{
        ...(menuHeight &&
          menuOrientationY === Position.TOP && {
            transform: `translateY(-${menuHeight + 2}px)`,
            transition: 'none',
          }),
        ...(triggerHeight &&
          menuOrientationY === Position.BOTTOM && {
            transform: `translateY(${triggerHeight + 2}px)`,
            transition: 'none',
          }),
      }}
      className={`
      tabindex:-1 border-2 flex flex-col gap-1 rounded absolute bg-blue-500 cursor-pointer p-2 z-10 w-32 
      ${isMenuOpen ? 'block' : 'hidden'}
      ${menuOrientationX === Position.LEFT ? 'right-0' : 'left-0'}
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

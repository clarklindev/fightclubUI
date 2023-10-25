import React, { useState, useEffect, useLayoutEffect, useRef, ButtonHTMLAttributes } from 'react';

import { useDropdown, DropdownContextProvider } from '../../context/DropdownContext';
import { Button } from '../../components';
import { Position } from '../../utils/position';

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return <DropdownContextProvider>{children}</DropdownContextProvider>;
};

const DropdownWrapper = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { onBlur, setDropdownRef } = useDropdown();

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownRef(dropdownRef);
    }
  }, [dropdownRef]);

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
    <div className="relative flex justify-start" ref={dropdownRef} style={style}>
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
    triggerRef,
    setMenuOrientationX,
    setMenuOrientationY,
    dropdownRef,
  } = useDropdown();

  const menuRef = useRef<HTMLDivElement | null>(null);

  const [menuHeight, setMenuHeight] = useState<number | undefined>();
  const [triggerHeight, setTriggerHeight] = useState<number | undefined>();

  useLayoutEffect(() => {
    const viewHeight = window.innerHeight;
    const viewWidth = window.innerWidth;
    const scrollbarThickness = 50;

    let menuBounds: DOMRect;
    let triggerBounds: DOMRect;

    if (menuRef?.current && triggerRef?.current && dropdownRef?.current) {
      menuBounds = (menuRef.current as HTMLElement).getBoundingClientRect();
      triggerBounds = (triggerRef.current as HTMLElement).getBoundingClientRect();

      setTriggerHeight(Math.round(triggerBounds?.height));
      setMenuHeight(Math.round(menuBounds?.height));

      const parentNode = (dropdownRef.current as HTMLElement).parentNode as HTMLElement;
      const styles = window.getComputedStyle(dropdownRef.current as HTMLElement);
      // Check the value of the justifyContent property
      const justifyContentValue = styles.getPropertyValue('justify-content');
      console.log('justifyContentValue: ', justifyContentValue);

      if (
        triggerBounds.x + menuBounds.width + scrollbarThickness > viewWidth ||
        (triggerBounds.x + menuBounds.width + scrollbarThickness > parentNode.clientWidth &&
          justifyContentValue === 'end')
      ) {
        setMenuOrientationX(Position.LEFT);
      } else {
        setMenuOrientationX(Position.RIGHT);
      }

      if (justifyContentValue === 'center') {
        setMenuOrientationX(Position.CENTER);
      }

      triggerBounds.y + menuBounds.height + scrollbarThickness > viewHeight
        ? setMenuOrientationY(Position.TOP)
        : setMenuOrientationY(Position.BOTTOM);
    }
  }, [isMenuOpen, menuRef, triggerRef]);

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
        right: menuOrientationX === Position.LEFT ? '0' : 'auto',
        left: menuOrientationX === Position.RIGHT ? '0' : 'auto',
      }}
      className={`
      tabindex:-1 border-2 flex flex-col gap-1 rounded absolute bg-blue-500 cursor-pointer p-2 z-10 w-32 
      ${isMenuOpen ? 'block' : 'hidden'}
      ${className}
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

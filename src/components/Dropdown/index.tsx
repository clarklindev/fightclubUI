import React, { useState, useEffect, useLayoutEffect, useRef, ButtonHTMLAttributes, ReactElement } from 'react';

import { useDropdown, DropdownContextProvider } from '@swagfinger/context/DropdownContext';
import { Button } from '@swagfinger/components';
import { Position } from '@swagfinger/utils/position';
import { getHorizontalQuadrant } from '@swagfinger/utils/getQuadrant';

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return <DropdownContextProvider>{children}</DropdownContextProvider>;
};

const Wrapper = ({
  children,
  className = 'justify-start', //button
  id = 'default',
  autoAdjust = true,
  menuAlign = Position.AUTO, //menu
  layoutContainer = null,
  hoverMode = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  autoAdjust?: boolean;
  menuAlign?: Position | string;
  layoutContainer?: (HTMLElement | React.ReactNode) | null;
  hoverMode?: boolean;
}) => {
  const { onBlur, setId, setAutoAdjust, setMenuAlign, setLayoutContainer, setHoverMode } = useDropdown();
  useEffect(() => {
    setId(id);
  }, [id]);

  useEffect(() => {
    setAutoAdjust(autoAdjust);
  }, [autoAdjust]);

  useEffect(() => {
    setMenuAlign(menuAlign);
  }, [menuAlign]);

  useEffect(() => {
    setLayoutContainer(layoutContainer as HTMLElement);
  }, [layoutContainer]);

  useEffect(() => {
    setHoverMode(hoverMode);
  }, [hoverMode]);

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
    // className is using tailwind syntax: justify-center justify-self-center justify-items-center justify-center
    <div className={`relative flex ${className}`}>{children}</div>
  );
};

const Trigger = ({ asChild, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) => {
  const { isFocused, setIsMenuOpen, onFocus, onBlur, handleMouseOver, handleMouseLeave, setTriggerRef, hoverMode } =
    useDropdown();
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

  const additionalProps = {
    ref: triggerRef,
    className: 'relative',
    ...(hoverMode
      ? {
          onMouseEnter: handleMouseOver,
          onMouseLeave: handleMouseLeave,
        }
      : {}),
    ...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>),
    ...rest,
  };

  return asChild ? (
    <>{React.cloneElement(children as ReactElement, additionalProps)}</>
  ) : (
    <Button {...additionalProps}>{children}</Button>
  );
};

const Menu = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const {
    isMenuOpen,
    handleMouseOver,
    handleMouseLeave,
    menuAlign,
    menuOrientationX,
    menuOrientationY,
    setMenuOrientationX,
    setMenuOrientationY,
    autoAdjust,
    id,
    layoutContainer,
    triggerRef,
    hoverMode,
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

    if (menuRef?.current && triggerRef?.current) {
      menuBounds = (menuRef.current as HTMLElement).getBoundingClientRect();
      triggerBounds = (triggerRef.current as HTMLElement).getBoundingClientRect();

      setTriggerHeight(Math.round(triggerBounds?.height));
      setMenuHeight(Math.round(menuBounds?.height));

      if (menuAlign === 'auto' || menuAlign === Position.AUTO) {
        setMenuOrientationX(Position.CENTER);

        //check where is the trigger on the page , place setMenuOrientationX in relation to that position

        const horizontalQuad = getHorizontalQuadrant(
          triggerRef.current as HTMLElement,
          layoutContainer ? (layoutContainer as HTMLElement) : undefined,
        );

        if (horizontalQuad === Position.LEFT) {
          setMenuOrientationX(Position.LEFT);
        }

        if (horizontalQuad === Position.RIGHT) {
          setMenuOrientationX(Position.RIGHT);
        }
      }

      if (autoAdjust) {
        if (triggerBounds.x + menuBounds.width + scrollbarThickness > viewWidth) {
          console.log('auto adjust Position.RIGHT');
          setMenuOrientationX(Position.RIGHT);
        } else if (menuBounds.x < 0) {
          console.log('auto adjust Position.LEFT');
          setMenuOrientationX(Position.LEFT);
        }
      }

      triggerBounds.y + menuBounds.height + scrollbarThickness > viewHeight
        ? setMenuOrientationY(Position.TOP)
        : setMenuOrientationY(Position.BOTTOM);
    }
  }, [autoAdjust, menuAlign, layoutContainer, triggerRef, menuRef]);

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
        left: menuOrientationX === Position.LEFT ? '0' : 'auto',
        right: menuOrientationX === Position.RIGHT ? '0' : 'auto',
      }}
      className={`
      tabindex:-1 border-2 flex flex-col gap-1 rounded absolute bg-blue-500 cursor-pointer p-2 z-10 

      ${isMenuOpen ? 'block' : 'hidden'}
      ${className}
      `}
      onMouseEnter={hoverMode ? handleMouseOver : undefined}
      onMouseLeave={hoverMode ? handleMouseLeave : undefined}>
      {children}
    </div>
  );
};

const MenuItem = ({
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

Wrapper.displayName = 'Dropdown.Wrapper';
Dropdown.Wrapper = Wrapper;

Trigger.displayName = 'Dropdown.Trigger';
Dropdown.Trigger = Trigger;

Menu.displayName = 'Dropdown.Menu';
Dropdown.Menu = Menu;

MenuItem.displayName = 'Dropdown.MenuItem';
Dropdown.MenuItem = MenuItem;

export { Dropdown };

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useFocus } from '../../customhooks';
import { Button } from '../../components';

const DropdownMenuContent = styled.div`
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction:column;
  margin-top: 5px;
  gap: 5px;
  border-radius: 5px;
  padding 5px 5px;

  background: red;
  position: absolute;
  right: 0;
  z-index: 10;
`;
const DropdownMenuItem = styled.button`
  min-width: 120px;
  min-height: 36px;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    padding: 5px;
  }
  border-radius: 5px;
`;

type DropdownProps = {
  children?: React.ReactNode;
};

export const Dropdown = ({ children }: DropdownProps) => {
  const [isFocused, { onFocus, onBlur }] = useFocus();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    //actually call blur
    if (buttonRef.current) {
      !isFocused ? buttonRef.current.blur() : buttonRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onBlur();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}>
      <Button ref={buttonRef} intent="plain" {...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>)}>
        {children}
      </Button>

      {isFocused && (
        <DropdownMenuContent ref={menuRef}>
          <DropdownMenuItem onClick={onBlur}>Menu Item 1</DropdownMenuItem>
          <DropdownMenuItem onClick={onBlur}>Menu Item 2</DropdownMenuItem>
          <DropdownMenuItem onClick={onBlur}>Menu Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </div>
  );
};

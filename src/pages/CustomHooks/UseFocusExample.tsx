import React, { useRef, useEffect } from 'react';

import { useFocus } from '@swagfinger/customhooks';
import { Button } from '@swagfinger/components';

const UseFocusExample = () => {
  const { isFocused, onFocus, onBlur } = useFocus();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    //actually call blur
    if (buttonRef.current) {
      !isFocused ? buttonRef.current.blur() : buttonRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div style={{ position: 'relative' }}>
      <Button ref={buttonRef} {...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>)}>
        Button
      </Button>

      {isFocused && (
        <div
          ref={menuRef}
          style={{
            background: 'white',
            display: 'flex',
            position: 'absolute',
            top: '45px',
            zIndex: '10',
            cursor: 'pointer',
          }}>
          <ul>
            <li onClick={onBlur}>Menu Item 1</li>
            <li onClick={onBlur}>Menu Item 2</li>
            <li onClick={onBlur}>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UseFocusExample;

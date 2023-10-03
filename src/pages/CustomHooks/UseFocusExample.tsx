import React, { useEffect, useRef } from 'react';

import { useFocus } from '../../customhooks';
import { Button } from '../../components';

const UseFocusExample = () => {
  const [isFocused, { onFocus, onBlur }] = useFocus();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    //actually call blur
    if (!isFocused && buttonRef.current) {
      buttonRef.current.blur();
    }
    if (isFocused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div style={{ position: 'relative' }}>
      <Button
        ref={buttonRef}
        // onMouseOver={onFocus}
        // onMouseEnter={onFocus}
        {...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>)}>
        Button
      </Button>
      {isFocused && (
        <div
          style={{
            background: 'red',
            display: 'flex',
            position: 'absolute',
            top: '60px',
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

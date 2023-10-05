import React, { useRef, useState, useEffect } from 'react';

import { useFocus } from '../../customhooks';
import { Button } from '../../components';

const UseFocusExample = () => {
  const [isFocused, { onFocus, onBlur }] = useFocus();

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    // Set a timeout to update isMenuOpen after 400ms
    timeoutId = setTimeout(() => {
      setIsMenuOpen(isFocused);
    }, 400);

    //actually call blur
    if (buttonRef.current) {
      !isFocused ? buttonRef.current.blur() : buttonRef.current.focus();
    }

    // Cleanup the timeout if the component unmounts or isFocused changes again
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isFocused]);

  const handleMouseOver = () => {
    onFocus();
    setIsMenuOpen(true);
  };

  const handleMouseLeave = async () => {
    onBlur();
  };

  return (
    <div style={{ position: 'relative' }}>
      <Button
        ref={buttonRef}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        {...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>)}>
        Button
      </Button>

      {isMenuOpen && (
        <div
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          ref={menuRef}
          style={{
            background: 'red',
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

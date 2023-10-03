import { useRef, useEffect } from 'react';

import { useFocus } from '../../customhooks';
import { Button } from '../../components';

// the difference between this example and useFocusExample:
/*
button gets a onMouseOver={onFocus}
listens for mouse events outside of click area:
this can be used for mobile and on desktop its convenient that you dont need to click on the button to interact

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && menuRef.current) {
        if (!buttonRef.current.contains(event.target as Node) && !menuRef.current.contains(event.target as Node)) {
          onBlur();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
*/
const UseHoverFocusExample = () => {
  const [isFocused, { onFocus, onBlur }] = useFocus();

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (buttonRef.current && menuRef.current) {
  //       if (!buttonRef.current.contains(event.target as Node) && !menuRef.current.contains(event.target as Node)) {
  //         onBlur();
  //       }
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, []);

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
        onMouseOver={onFocus}
        onMouseEnter={onFocus}
        {...({ onFocus, onBlur } as React.HTMLAttributes<HTMLButtonElement>)}>
        Button
      </Button>

      {isFocused && (
        <div
          ref={menuRef}
          style={{ background: 'red', position: 'absolute', zIndex: '10', cursor: 'pointer', top: '60px' }}>
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

export default UseHoverFocusExample;

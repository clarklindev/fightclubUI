import { useState, useRef, useEffect } from 'react';

const UseHoverFocusExample = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && menuRef.current) {
        if (!buttonRef.current.contains(event.target as Node) && !menuRef.current.contains(event.target as Node)) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <button ref={buttonRef} onMouseEnter={() => setMenuOpen(true)} onClick={() => setMenuOpen(!menuOpen)}>
        Open Menu
      </button>
      {menuOpen && (
        <div ref={menuRef} style={{ background: 'red', display: 'inline-flex' }}>
          <ul>
            <li onClick={() => setMenuOpen(false)}>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UseHoverFocusExample;

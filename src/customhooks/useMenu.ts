// menu can be open or closed
import { useState } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return { isMenuOpen, setIsMenuOpen };
};

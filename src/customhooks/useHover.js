import { useState } from 'react';

//custom hook
export const useHover = () => {
  const [hovering, setHover] = useState(false);
  const mouseOver = () => setHover(true);
  const mouseOut = () => setHover(false);

  const attrs = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut,
  };

  //your component receives helper methods from useHover: onMouseOver() onMouseOut()
  //and state: hovering
  return [hovering, attrs];
};

import { useState } from 'react';

type HoverAttributes = {
  onMouseOver: () => void;
  onMouseOut: () => void;
};

// this is when interaction with the component is with mouse hover, and its specific to when mouse is over and when its not.

export const useHover = () => {
  const [hovering, setHover] = useState(false);
  const mouseOver = () => setHover(true);
  const mouseOut = () => setHover(false);

  const attrs: HoverAttributes = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut,
  };

  //your component receives helper methods from useHover: onMouseOver() onMouseOut()
  //and state: hovering
  return [hovering, attrs];
};

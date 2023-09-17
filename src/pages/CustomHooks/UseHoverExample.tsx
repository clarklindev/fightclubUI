import React from 'react';

import { useHover } from '../../customhooks';
import { Button } from '../../components';

const UseHoverExample = () => {
  const [hovering, attrs] = useHover();

  return (
    <div style={{ position: 'relative' }}>
      <Button {...attrs}>Button</Button>
      {hovering && <div className="absolute">hello world</div>}
    </div>
  );
};

export default UseHoverExample;

import React from 'react';

import { useHover } from '../useHover';
import Button from '../../components/Button';

const UseHoverExample = () => {
  const [hovering, attrs] = useHover();

  return (
    <div style={{ position: 'relative' }}>
      <Button label='hover' {...attrs} />
      {hovering && <div className='absolute'>hello world</div>}
    </div>
  );
};

export default UseHoverExample;

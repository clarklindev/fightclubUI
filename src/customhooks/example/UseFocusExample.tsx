import React from 'react';

import { useFocus } from '../useFocus';
import { Button } from '../../components';

const UseFocusExample = () => {
  const [isFocused, attrs] = useFocus();

  return (
    <>
      <Button {...attrs}>Button</Button>
      {isFocused && <div className="absolute">hello world</div>}
    </>
  );
};

export default UseFocusExample;

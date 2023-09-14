import React from 'react';
import { Button } from 'swagfingerui';

const ButtonTextExample = () => {
  return (
    <Button
      intent="text"
      onClick={() => {
        console.log('hello world');
      }}>
      Text
    </Button>
  );
};

export default ButtonTextExample;

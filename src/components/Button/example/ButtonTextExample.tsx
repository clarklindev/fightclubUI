import React from 'react';
import Button from '../index';

const ButtonTextExample = () => {
  return (
    <Button
      label='Text'
      variation='text'
      onClick={() => {
        console.log('hello world');
      }}
    />
  );
};

export default ButtonTextExample;

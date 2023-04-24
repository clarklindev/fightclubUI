import React from 'react';
import Button from '../index';

const ButtonOutlinedExample = () => {
  return (
    <Button
      label='Outlined'
      variation='outlined'
      onClick={() => {
        console.log('hello world');
      }}
    />
  );
};

export default ButtonOutlinedExample;

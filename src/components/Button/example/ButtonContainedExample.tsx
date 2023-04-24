import React from 'react';
import Button from '../index';

const ButtonContainedExample = () => {
  return (
    <Button
      label='Contained'
      variation='contained'
      onClick={() => {
        console.log('hello world');
      }}
    />
  );
};

export default ButtonContainedExample;

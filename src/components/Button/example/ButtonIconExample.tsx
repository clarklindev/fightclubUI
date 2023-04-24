import React from 'react';
import Button from '../index';
import Icon from '../../Icon';
import ShoppingCartIcon from '../../../icons/ShoppingCartIcon';

const ButtonIconExample = () => {
  return (
    <Button
      variation='icon'
      label={
        <Icon size='25px'>
          <ShoppingCartIcon />
        </Icon>
      }
      onClick={() => {
        console.log('hello world');
      }}
    />
  );
};

export default ButtonIconExample;

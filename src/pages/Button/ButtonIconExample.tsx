import React from 'react';
import { Button, Icon } from 'swagfingerui';
import ShoppingCartIcon from 'swagfingerui/icons/ShoppingCartIcon';

const ButtonIconExample = () => {
  return (
    <Button
      intent="icon"
      onClick={() => {
        console.log('hello world');
      }}>
      <Icon size="25px">
        <ShoppingCartIcon />
      </Icon>
    </Button>
  );
};

export default ButtonIconExample;

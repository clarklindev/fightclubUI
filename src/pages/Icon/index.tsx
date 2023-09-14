import React from 'react';
import { Icon, Heading } from 'swagfingerui';
import ShoppingCartIcon from 'swagfingerui/icons/ShoppingCartIcon';

const IconExample = () => {
  return (
    <>
      <Heading variation="h4">Icon</Heading>

      <Icon size="25px">
        <ShoppingCartIcon />
      </Icon>
    </>
  );
};

export default IconExample;

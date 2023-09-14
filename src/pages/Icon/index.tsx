import React from 'react';

import { Icon, Heading } from '../../components';
import { ShoppingCartIcon } from '../../icons';

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

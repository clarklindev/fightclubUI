import React from 'react';
import Icon from '..';
import Heading from '../../Heading';

import ShoppingCartIcon from '../../../icons/ShoppingCartIcon';

const IconExample = () => {
  return (
    <>
      <Heading variation='h4'>Icon</Heading>

      <Icon size='25px' stroke='black' fill=''>
        <ShoppingCartIcon />
      </Icon>
    </>
  );
};

export default IconExample;

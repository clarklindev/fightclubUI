import React, { useState, useRef } from 'react';
import Input, { InputWrapper } from '../index';

import Button from '../../Button';
import Icon from '../../Icon';
import SearchIcon from '../../../icons/SearchIcon';

const InputSearchExample = () => {
  const ref = useRef(null);

  const clickHandler = () => {
    console.log('value: ', ref.current.value);
  };

  return (
    <InputWrapper>
      <Input
        className='px-25'
        ref={ref}
        modifiers={['noborder', 'noborderleftradius', 'noleftpadding']}
        placeholder='placeholder'
      />

      <Button
        variation='icon'
        modifiers={['noborderrightradius']}
        onClick={clickHandler}
        label={
          <Icon size='25px'>
            <SearchIcon />
          </Icon>
        }
      />
    </InputWrapper>
  );
};

export default InputSearchExample;

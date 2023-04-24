import React, { useState } from 'react';
import Input, { InputWrapper } from '../index';

import Button from '../../Button';
import Icon from '../../Icon';

import ShowIcon from '../../../icons/ShowIcon';
import HideIcon from '../../../icons/HideIcon';

const InputPasswordExample = () => {
  const [savedData, setSavedData] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <InputWrapper>
      <Input
        savedData={savedData}
        modifiers={['noborder', 'noborderrightradius', 'noleftpadding']}
        placeholder={'placeholder'}
        type={passwordVisible ? 'text' : 'password'}
        onChange={(event) => {
          setSavedData(event.target.value);
        }}
      />
      <Button
        variation='icon'
        onClick={() => setPasswordVisible(!passwordVisible)}
        label={
          <Icon size='25px'>
            {passwordVisible ? <HideIcon /> : <ShowIcon />}
          </Icon>
        }
      />
    </InputWrapper>
  );
};

export default InputPasswordExample;

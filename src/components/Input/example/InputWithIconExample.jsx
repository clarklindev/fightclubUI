import React, { useState } from 'react';
import Input, { InputWrapper } from '../index';
import SpeechIcon from '../../../icons/SpeechIcon';
import Icon from '../../Icon';

const InputWithIconExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <InputWrapper>
      <Icon size='25px'>
        <SpeechIcon />
      </Icon>
      <Input
        savedData={savedData}
        modifiers={['noborder', 'noborderleftradius']}
        placeholder='placeholder'
        onChange={(event) => {
          setSavedData(event.target.value);
        }}
      />
    </InputWrapper>
  );
};

export default InputWithIconExample;

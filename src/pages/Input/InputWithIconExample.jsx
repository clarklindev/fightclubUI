import React, { useState } from 'react';
import { Input, InputWrapper, Icon } from '../../components';
import { SpeechIcon } from '../../icons';

const InputWithIconExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <InputWrapper>
      <Icon size="25px">
        <SpeechIcon />
      </Icon>
      <Input
        savedData={savedData}
        border={false}
        placeholder="placeholder"
        onChange={event => {
          setSavedData(event.target.value);
        }}
      />
    </InputWrapper>
  );
};

export default InputWithIconExample;

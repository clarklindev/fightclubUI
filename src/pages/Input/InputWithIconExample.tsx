import { useState } from 'react';

import { Input, InputWrapper, Icon } from '@swagfinger/components';
import { SpeechIcon } from '@swagfinger/icons';

const InputWithIconExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <InputWrapper>
      <Icon size="20px">
        <SpeechIcon />
      </Icon>
      <Input
        value={savedData}
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

import { useState } from 'react';

import { Input, InputWrapper, Button, Icon } from '@swagfinger/components';
import { SearchIcon, CloseIcon } from '@swagfinger/icons';

const InputFilterExample = () => {
  const [savedData, setSavedData] = useState('');

  const clearHandler = () => {
    setSavedData('');
  };

  return (
    <InputWrapper>
      <Icon size="M">
        <SearchIcon />
      </Icon>
      <Input
        value={savedData}
        border={false}
        placeholder="placeholder"
        onChange={event => {
          setSavedData(event.target.value);
        }}
      />

      {savedData.length > 0 && (
        <Button intent="icon" onClick={clearHandler}>
          <Icon size="M">
            <CloseIcon />
          </Icon>
        </Button>
      )}
    </InputWrapper>
  );
};

export default InputFilterExample;

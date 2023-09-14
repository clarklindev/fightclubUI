import React, { useState } from 'react';
import { Input, InputWrapper, Button, Icon } from 'swagfingerui';
import SearchIcon from 'swagfingerui/icons/SearchIcon';
import ClearIcon from 'swagfingerui/icons/ClearIcon';

const InputFilterExample = () => {
  const [savedData, setSavedData] = useState('');

  const clearHandler = () => {
    setSavedData('');
  };

  return (
    <InputWrapper>
      <Icon size="25px">
        <SearchIcon />
      </Icon>
      <Input
        savedData={savedData}
        border={false}
        placeholder="placeholder"
        onChange={event => {
          setSavedData(event.target.value);
        }}
      />

      {savedData.length > 0 && (
        <Button intent="icon" onClick={clearHandler}>
          <Icon size="25px">
            <ClearIcon />
          </Icon>
        </Button>
      )}
    </InputWrapper>
  );
};

export default InputFilterExample;

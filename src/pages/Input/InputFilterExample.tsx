import { useState } from 'react';

import { Input, InputWrapper, Button, Icon } from '../../components';
import { SearchIcon, ClearIcon } from '../../icons';

const InputFilterExample = () => {
  const [savedData, setSavedData] = useState('');

  const clearHandler = () => {
    setSavedData('');
  };

  return (
    <InputWrapper>
      <Icon size="20px">
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
          <Icon size="20px">
            <ClearIcon />
          </Icon>
        </Button>
      )}
    </InputWrapper>
  );
};

export default InputFilterExample;

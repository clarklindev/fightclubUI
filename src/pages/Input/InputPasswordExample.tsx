import { useState } from 'react';

import { Input, InputWrapper, Button, Icon } from '../../components';
import { ShowIcon, HideIcon } from '../../icons';

const InputPasswordExample = () => {
  const [savedData, setSavedData] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <InputWrapper>
      <Input
        value={savedData}
        placeholder={'placeholder'}
        border={false}
        type={passwordVisible ? 'text' : 'password'}
        onChange={event => {
          setSavedData(event.target.value);
        }}
      />
      <Button intent="icon" onClick={() => setPasswordVisible(!passwordVisible)}>
        <Icon size="20px">{passwordVisible ? <HideIcon /> : <ShowIcon />}</Icon>
      </Button>
    </InputWrapper>
  );
};

export default InputPasswordExample;

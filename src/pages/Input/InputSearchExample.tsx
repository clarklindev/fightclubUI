import { useRef, useState } from 'react';

import { Input, InputWrapper, Button, Icon } from '../../components';
import { SearchIcon } from '../../icons';

const InputSearchExample = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [savedData, setSavedData] = useState('');
  const clickHandler = () => {
    if (ref.current) {
      console.log('value: ', ref.current.value);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setSavedData(val);
  };

  return (
    <InputWrapper>
      <Input ref={ref} value={savedData} onChange={onChange} border={false} placeholder="placeholder" />
      <Button intent="icon" onClick={clickHandler}>
        <Icon size="20px">
          <SearchIcon />
        </Icon>
      </Button>
    </InputWrapper>
  );
};

export default InputSearchExample;

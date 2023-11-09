import { useState } from 'react';

import { Input } from '@swagfinger/components';

//normal input
const InputExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <Input
      value={savedData}
      onChange={event => {
        setSavedData(event.target.value);
      }}
    />
  );
};

export default InputExample;

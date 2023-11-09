import { useState } from 'react';

import { Input } from '@swagfinger/components';

const InputNoBorderExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <Input
      value={savedData}
      placeholder="placeholder"
      className="bg-transparent"
      border={false}
      onChange={event => {
        setSavedData(event.target.value);
      }}
    />
  );
};

export default InputNoBorderExample;

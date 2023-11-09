import { useState } from 'react';

import { Input } from '@swagfinger/components';

const InputReadOnlyExample = () => {
  const [savedData, setSavedData] = useState('this is readonly');

  return (
    <Input
      value={savedData}
      readonly
      onChange={event => {
        setSavedData(event.target.value);
      }}
    />
  );
};

export default InputReadOnlyExample;

import React, { useState } from 'react';
import { Input } from 'swagfingerui';

//normal input
const InputExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <Input
      savedData={savedData}
      onChange={event => {
        setSavedData(event.target.value);
      }}
    />
  );
};

export default InputExample;

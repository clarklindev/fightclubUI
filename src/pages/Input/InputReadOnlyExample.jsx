import React, { useState } from 'react';
import { Input } from 'swagfingerui';

const InputReadOnlyExample = () => {
  const [savedData, setSavedData] = useState('this is readonly');

  return (
    <Input
      savedData={savedData}
      readonly
      onChange={event => {
        setSavedData(event.target.value);
      }}
    />
  );
};

export default InputReadOnlyExample;

import React, { useState } from 'react';
import Input from '../index';

const InputNoBorderExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <Input
      savedData={savedData}
      modifiers={['noborder', 'noleftpadding']}
      placeholder='placeholder'
      onChange={(event) => {
        setSavedData(event.target.value);
      }}
    />
  );
};

export default InputNoBorderExample;

import { useState } from 'react';

import { Input } from '../../components';

const InputNoBorderExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <Input
      savedData={savedData}
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

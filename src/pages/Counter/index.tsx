import React, { useState } from 'react';

import { Counter, Heading } from '../../components';

const CounterExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <>
      <Heading variation="h4">Counter</Heading>
      <Counter
        savedData={savedData}
        onChange={newValue => setSavedData(newValue)}
      />
    </>
  );
};

export default CounterExample;

import { useState } from 'react';

import { Counter, Heading, ResizePanel } from '../../components';

const CounterExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <>
      <Heading variation="h4">Counter</Heading>
      <ResizePanel>
        <Counter savedData={savedData} onChange={newValue => setSavedData(newValue)} />
      </ResizePanel>
    </>
  );
};

export default CounterExample;

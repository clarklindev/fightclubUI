import { useState } from 'react';

import { Counter, Heading, ResizePanel } from '@swagfinger/components';

const CounterExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Counter
      </Heading>
      <ResizePanel>
        <Counter savedData={savedData} onChange={newValue => setSavedData(newValue)} />
      </ResizePanel>
    </>
  );
};

export default CounterExample;

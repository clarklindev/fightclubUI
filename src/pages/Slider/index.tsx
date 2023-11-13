import { useState } from 'react';

import { Heading, Slider, ResizePanel } from '@swagfinger/components';

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Slider
      </Heading>
      <ResizePanel>
        <Slider value={savedData} orientation="horizontal" length="100px" onChange={setSavedData} />
      </ResizePanel>
    </>
  );
};

export default SliderExample;

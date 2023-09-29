import { useState } from 'react';

import { Heading, Slider, ResizePanel } from '../../components';

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <>
      <Heading variation="h4">Slider</Heading>
      <ResizePanel>
        <div style={{ width: '100px', height: '300px' }}>
          <Slider value={savedData} orientation="horizontal" length="100px" onChange={setSavedData} />
        </div>
      </ResizePanel>
    </>
  );
};

export default SliderExample;

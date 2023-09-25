import { useState } from 'react';

import { Heading } from '../../components';
import { Slider } from '../../components/Slider';

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <>
      <Heading variation="h4">Slider</Heading>
      <div style={{ width: '100px', height: '300px' }}>
        <Slider value={savedData} orientation="horizontal" length="100px" onChange={setSavedData} />
      </div>
    </>
  );
};

export default SliderExample;

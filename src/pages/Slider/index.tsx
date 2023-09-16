import React, { useState } from 'react';

import { Slider, Heading } from '../../components';

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <>
      <Heading variation="h4">Slider</Heading>
      <Slider
        savedData={savedData}
        min={0}
        max={100}
        onChange={setSavedData}
        width="300px"
      />
    </>
  );
};

export default SliderExample;

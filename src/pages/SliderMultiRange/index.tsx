import React, { useState } from 'react';

import { SliderMultiRange, Heading } from '../../components';

const SliderMultiRangeExample = () => {
  const [sliderValues, setSliderValues] = useState([0, 20, 50]); //holds positions of sliders

  return (
    <>
      <Heading variation="h4">Slider (Multirange)</Heading>
      <SliderMultiRange sliderValues={sliderValues} onChange={setSliderValues} />
    </>
  );
};

export default SliderMultiRangeExample;

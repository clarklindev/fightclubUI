import { useState } from 'react';

import { ResizePanel } from '../../components';
import { SliderMultiRange, Heading } from '../../components';

const SliderMultiRangeExample = () => {
  const [sliderValues, setSliderValues] = useState([0, 20, 20, 20]); //holds positions of sliders

  return (
    <>
      <Heading variation="h4">Slider (Multirange)</Heading>
      <ResizePanel>
        <SliderMultiRange sliderValues={sliderValues} colors={['red', 'yellow', 'green']} onChange={setSliderValues} />
      </ResizePanel>
    </>
  );
};

export default SliderMultiRangeExample;

import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { SliderMultiRange, Heading, ResizePanel, Tabs, CodeBlock } from '@swagfinger/components';

const SliderMultiRangeExample = () => {
  const [sliderValues, setSliderValues] = useState([0, 20, 20, 20]); //holds positions of sliders

  const preview = (
    <SliderMultiRange sliderValues={sliderValues} colors={['red', 'yellow', 'green']} onChange={setSliderValues} />
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Slider (Multirange)
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default SliderMultiRangeExample;

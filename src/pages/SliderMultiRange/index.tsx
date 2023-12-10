import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { SliderMultiRange, Heading, Tabs, CodeBlock } from '@swagfinger/components';

const SliderMultiRangeExample = () => {
  const [sliderValues, setSliderValues] = useState([0, 20, 40, 50, 60, 80, 100]); //holds positions of sliders

  const preview = (
    <div
      style={{
        width: '100%',
        height: '350px',
        border: '1px solid red',
      }}>
      <SliderMultiRange
        sliderValues={sliderValues}
        colors={['red', 'yellow', 'green']}
        orientation="vertical"
        onChange={setSliderValues}
      />
    </div>
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

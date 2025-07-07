import { useState } from 'react';
import { SliderMultiRange, Heading, Tabs, CodeBlock } from '@/components';
import Code from './code.mdx';

const SliderMultiRangeExample = () => {
  const [sliderValues, setSliderValues] = useState([0, 20, 40]); //holds positions of sliders

  const preview = (
    <>
      <div
        style={{
          width: '100%',
          height: '350px',
          border: '1px solid red',
        }}>
        <SliderMultiRange
          sliderValues={sliderValues}
          colors={['red', 'yellow', 'green']}
          orientation="horizontal"
          onChange={setSliderValues}
        />
      </div>
      <br />
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
    </>
  );

  return (
    <>
      <Heading as="h1" className="text-xl" data-observable="true">
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
            <CodeBlock>
              <Code />
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default SliderMultiRangeExample;

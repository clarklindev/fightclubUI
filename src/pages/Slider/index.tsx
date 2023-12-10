import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Heading, Slider, Tabs, CodeBlock } from '@swagfinger/components';

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  const preview = (
    <div
      style={{
        width: '100%',
        height: '350px',
        border: '1px solid red',
      }}>
      <Slider value={savedData} orientation="vertical" onChange={setSavedData} />
    </div>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Slider
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

export default SliderExample;

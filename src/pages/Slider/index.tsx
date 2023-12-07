import { useState, useRef, useEffect } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Heading, Slider, Tabs, CodeBlock } from '@swagfinger/components';

//firstly a slider is meant for a range of values.
//shouldnt be a full width or full height component,
//it does and should inherit its dimensions.

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  const preview = (
    <div
      style={{
        height: '300px',
        border: '1px solid orange',
        position: 'relative',
      }}>
      <Slider value={savedData} orientation="vertical" thickness="15px" onChange={setSavedData} />
    </div>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
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

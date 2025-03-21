import { useState } from 'react';

import { Heading, Slider, Tabs, CodeBlock } from '@fightclub/components';
import Code from './code.mdx';

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  const preview = (
    <>
      <div
        style={{
          width: '100%',
          height: '350px',
          border: '1px solid red',
        }}>
        <Slider value={savedData} orientation="horizontal" onChange={setSavedData} />
      </div>
      <br />
      <div
        style={{
          width: '100%',
          height: '350px',
          border: '1px solid red',
        }}>
        <Slider value={savedData} orientation="vertical" onChange={setSavedData} />
      </div>
    </>
  );

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
            <CodeBlock><Code/></CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default SliderExample;

import { useState } from 'react';

import { RadioButton, Heading, Tabs, CodeBlock } from '@/components';
import Code from './code.mdx';

const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  const preview = (
    <RadioButton
      checked={savedData}
      name="radio"
      label="label"
      onChange={event => {
        setSavedData(event.target.checked);
      }}
    />
  );

  return (
    <>
      <Tabs>
        <Heading as="h1" className="text-xl" data-observable="true">
          RadioButton
        </Heading>

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

export default RadioButtonExample;

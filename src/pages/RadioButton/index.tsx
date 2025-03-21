import { useState } from 'react';

import { RadioButton, Heading, Tabs, CodeBlock } from '@fightclub/components';
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
      <Heading variation="h1" size="level1" data-observable="true">
        RadioButton
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

export default RadioButtonExample;

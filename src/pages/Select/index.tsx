import { useState } from 'react';

import { Select, Heading, Tabs, CodeBlock } from '@fightclub/components';
import Code from './code.mdx';

const SelectExample = () => {
  const [savedData, setSavedData] = useState<string | null>();

  const data = [
    { value: 'option0', text: 'Select an option' },
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
  ];

  const preview = (
    <>
      <Select>
        <Select.SelectElement savedData={savedData} onChange={event => setSavedData(event.target.value)}>
          {data.map((each, index) => (
            <Select.SelectOption value={each.value} key={index}>
              {each.text}
            </Select.SelectOption>
          ))}
        </Select.SelectElement>
        <Select.SelectIcon></Select.SelectIcon>
      </Select>
    </>
  );

  return (
    <>
      <Heading as="h1" size="level1" data-observable="true">
        Select
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

export default SelectExample;

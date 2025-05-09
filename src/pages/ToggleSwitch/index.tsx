import { useState } from 'react';

import { ToggleSwitch, Heading, Tabs, CodeBlock } from '@fightclub/components';
import Code from './code.mdx';

const ToggleSwitchExample = () => {
  const [savedData, setSavedData] = useState(false);

  // ----------------------------------------------------------------
  const preview = (
    <ToggleSwitch
      savedData={savedData}
      onChange={event => {
        console.log('event.target.checked: ', event.target.checked);
        setSavedData(event.target.checked);
      }}
    />
  );

  return (
    <>
      <Heading as="h1" size="level1" data-observable="true">
        Toggle Switch
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

export default ToggleSwitchExample;

import { useState } from 'react';

import { CodeBlock, Counter, Heading, Tabs } from '@fightclub/components';
import Code from './code.mdx';

const CounterExample = () => {
  const [savedData, setSavedData] = useState(0);
  const preview = <Counter savedData={savedData} onChange={newValue => setSavedData(newValue)} />;

  return (
    <>
      <Heading as="h1" size="level1" data-observable="true">
        Counter
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

export default CounterExample;

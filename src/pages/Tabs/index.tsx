import { CodeBlock, Heading, Tabs } from '@/components';

import Code from './code.mdx';

const TabsExample = () => {
  const preview = (
    <Tabs>
      <Tabs.TriggerGroup>
        <Tabs.Trigger data-tab="0">Tab1</Tabs.Trigger>
        <Tabs.Trigger data-tab="1">Tab2</Tabs.Trigger>
      </Tabs.TriggerGroup>

      <Tabs.ContentGroup>
        <Tabs.Content data-tab="0"></Tabs.Content>
        <Tabs.Content data-tab="1"></Tabs.Content>
      </Tabs.ContentGroup>
    </Tabs>
  );

  return (
    <>
      <Heading as="h1" className="text-xl" data-observable="true">
        Tabs
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

export default TabsExample;

import { Heading, Tabs } from '@fightclub/components';

import Code from './Code.mdx';

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
      <Heading variation="h1" size="level1" data-observable="true">
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
              <Code/>
            </Tabs.Content>
          </Tabs.ContentGroup>
        </Tabs>
    </>
  );
};

export default TabsExample;

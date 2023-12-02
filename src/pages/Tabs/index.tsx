import { Heading, Tabs, CodeBlock, Text } from '@swagfinger/components';
import { CodeBlockProvider } from '@swagfinger/context/CodeBlockContext';

const TabsExample = () => {
  const preview = (
    <Tabs>
      <Tabs.TriggerGroup>
        <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
        <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
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

      <CodeBlockProvider>
        <Tabs>
          <Tabs.TriggerGroup>
            <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
            <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
          </Tabs.TriggerGroup>
          <Tabs.ContentGroup>
            <Tabs.Content data-tab="0">{preview}</Tabs.Content>
            <Tabs.Content data-tab="1">
              <CodeBlock>{preview}</CodeBlock>
            </Tabs.Content>
          </Tabs.ContentGroup>
        </Tabs>
      </CodeBlockProvider>
    </>
  );
};

export default TabsExample;

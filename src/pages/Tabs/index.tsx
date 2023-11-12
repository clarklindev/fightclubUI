import { Tabs, Heading, CodeBlock, Text } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

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

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
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
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default TabsExample;

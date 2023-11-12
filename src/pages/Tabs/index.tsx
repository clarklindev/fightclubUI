import { Tabs, Heading, CodeBlock, Text } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const TabsExample = () => {
  const preview = (
    <Tabs>
      <Tabs.TriggerGroup>
        <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
        <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
      </Tabs.TriggerGroup>

      <Tabs.Content data-tab="0"></Tabs.Content>
      <Tabs.Content data-tab="1"></Tabs.Content>
    </Tabs>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h4">Tabs</Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>

        <Tabs.Content data-tab="0">
          <CodeBlock>{previewString}</CodeBlock>
        </Tabs.Content>
      </Tabs>
    </>
  );
};

export default TabsExample;

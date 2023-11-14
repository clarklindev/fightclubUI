import { Heading, ResizePanel, CodeBlock, Tabs } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const CodeBlockExample = () => {
  const preview = (
    <CodeBlock>{`button:focus {
      outline-width: 3px;
      outline-style: dashed;
      outline-color: orange;
      outline-offset: 10px;
    }`}</CodeBlock>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        CodeBlock
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

export default CodeBlockExample;

import reactElementToJSXString from 'react-element-to-jsx-string';
import { Heading, CodeBlock, Tabs } from '@swagfinger/components';

const HeadingExample = () => {
  const preview = (
    <>
      <Heading variation="h1">H1 heading</Heading>
      <Heading variation="h2">H2 heading</Heading>
      <Heading variation="h3">H3 heading</Heading>
      <Heading variation="h4">H4 heading</Heading>
      <Heading variation="h5">H5 heading</Heading>
      <Heading variation="h6">H6 heading</Heading>
    </>
  );
  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Headings
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
export default HeadingExample;

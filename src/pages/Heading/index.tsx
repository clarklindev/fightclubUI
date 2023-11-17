import reactElementToJSXString from 'react-element-to-jsx-string';
import { Heading, Tabs, CodeBlock, CodeBlockPreview } from '@swagfinger/components';
import { CodeBlockProvider } from '@swagfinger/context/CodeBlockContext';

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

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Heading
      </Heading>

      <CodeBlockProvider>
        <Tabs>
          <Tabs.TriggerGroup>
            <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
            <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
          </Tabs.TriggerGroup>
          <Tabs.ContentGroup>
            <Tabs.Content data-tab="0">
              <CodeBlockPreview />
            </Tabs.Content>
            <Tabs.Content data-tab="1">
              <CodeBlock editable={true} readOnly={false}>
                {preview}
              </CodeBlock>
            </Tabs.Content>
          </Tabs.ContentGroup>
        </Tabs>
      </CodeBlockProvider>
    </>
  );
};
export default HeadingExample;

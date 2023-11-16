import { Heading, CodeBlock, Tabs, Divider, Text } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Link } from 'react-router-dom';

const CodeBlockExample = () => {
  const preview = (
    <CodeBlock>
      {`button:focus {
  outline-width: 3px;
  outline-style: dashed;
  outline-color: orange;
  outline-offset: 10px;
}`}
    </CodeBlock>
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
      <Heading variation="h2">3rd party candidates</Heading>

      <Text>
        <Link to="https://codemirror.net/">code mirror</Link>
        <Divider variation="inline-vertical" />
      </Text>
      <Text>
        <Link to="https://www.npmjs.com/package/react-code-blocks">react-code-blocks</Link>
        <Divider variation="inline-vertical" />
        <Link to="https://codesandbox.io/s/react-code-blocks-xgjrr">playground</Link>
      </Text>
    </>
  );
};

export default CodeBlockExample;

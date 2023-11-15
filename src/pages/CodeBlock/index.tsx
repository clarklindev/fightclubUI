import { Heading, CodeBlock, Tabs, Divider } from '@swagfinger/components';
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

      <div className="flex items-center my-1">
        <Link to="https://www.npmjs.com/package/react-code-blocks">react-code-blocks</Link>
        <Divider variation="vertical" />
        <Link to="https://codesandbox.io/s/react-code-blocks-xgjrr">playground</Link>
      </div>
      <div className="flex items-center my-1">
        <Link to="https://www.npmjs.com/package/react-code-blocks">react-code-blocks</Link>
        <Divider variation="vertical">hi</Divider>
        <Link to="https://codesandbox.io/s/react-code-blocks-xgjrr">playground</Link>
      </div>
    </>
  );
};

export default CodeBlockExample;

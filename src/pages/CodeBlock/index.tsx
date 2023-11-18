import { Heading, Tabs, CodeBlock, Text } from '@swagfinger/components';
import { CodeBlockProvider } from '@swagfinger/context/CodeBlockContext';

import { Link } from 'react-router-dom';

const CodeBlockExample = () => {
  const preview = `<CodeBlock>{"hi"}</CodeBlock>`;

  return (
    <>
      <Heading variation="h1" data-observable="true">
        CodeBlock
      </Heading>

      <CodeBlockProvider>
        <Tabs>
          <Tabs.TriggerGroup>
            <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
            <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
          </Tabs.TriggerGroup>
          <Tabs.ContentGroup>
            <Tabs.Content data-tab="0">
              <CodeBlock.Preview />
            </Tabs.Content>
            <Tabs.Content data-tab="1">
              <CodeBlock>{`import {CodeBlock} from '@swagfinger/components';`}</CodeBlock>
              <CodeBlock.Playground readOnly={true} editable={false}>
                {preview}
              </CodeBlock.Playground>
              <CodeBlock>{`//this is a comment`}</CodeBlock>
            </Tabs.Content>
          </Tabs.ContentGroup>
        </Tabs>
      </CodeBlockProvider>

      <Heading variation="h2">3rd party candidates</Heading>

      <Text>
        <Link to="https://www.npmjs.com/package/@uiw/react-codemirror">@uiw/react-codemirror</Link>
        <br />
        <Link to="https://codemirror.net/">code mirror</Link>
        <br />
        <Link to="https://www.npmjs.com/package/react-code-blocks">react-code-blocks</Link>
        <br />
      </Text>
    </>
  );
};

export default CodeBlockExample;

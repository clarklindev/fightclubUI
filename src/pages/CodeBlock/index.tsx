import { Heading, ResizePanel, CodeBlock } from '@swagfinger/components';

const CodeBlockExample = () => {
  return (
    <>
      <Heading variation="h4">CodeBlock</Heading>
      <ResizePanel>
        <CodeBlock>{`button:focus {
  outline-width: 3px;
  outline-style: dashed;
  outline-color: orange;
  outline-offset: 10px;
}`}</CodeBlock>
      </ResizePanel>
    </>
  );
};

export default CodeBlockExample;

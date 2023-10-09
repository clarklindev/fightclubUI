import { CodeBlock, Heading, Text } from '../components';

const GettingStarted = () => {
  return (
    <div>
      <Heading variation="h4">Getting Started</Heading>
      <Text>Getting started</Text>
      <Heading variation="h4">Build project</Heading>
      <Text>you can build the project as a library, or as development build.</Text>
      <Text>Use this mode: </Text>
      <CodeBlock>{`npm run build-preview`}</CodeBlock>
      <Text>for when you are ready to deploy on production, and use this npm build command while in development:</Text>
      <CodeBlock>{`npm run dev`}</CodeBlock>
    </div>
  );
};

export default GettingStarted;

import { CodeBlock, Heading, Section, Text } from '@swagfinger/components';

const GettingStarted = () => {
  return (
    <article>
      <Heading variation="h1">Getting Started</Heading>
      <Section>
        <Heading variation="h2" size="level2" data-observable="true">
          Installation
        </Heading>
        <Text>Status: work in progress</Text>
        <CodeBlock>{`npm i @swagfinger/swagfinger-ui`}</CodeBlock>
      </Section>

      <Section>
        <Heading variation="h2" size="level2" data-observable="true">
          Run in development
        </Heading>
        <Text>Use this npm build command while in development:</Text>
        <CodeBlock>{`npm run dev`}</CodeBlock>
      </Section>

      <Section>
        <Heading variation="h2" size="level2" data-observable="true">
          Build project for production
        </Heading>
        <Text>You can build the project as a library.</Text>
        <Text>Use this mode for when you are ready to deploy on production: </Text>
        <CodeBlock>{`npm run build`}</CodeBlock>
      </Section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </article>
  );
};

export default GettingStarted;

import { CodeBlock, Heading, Text } from '@swagfinger/components';

const GettingStarted = () => {
  return (
    <article>
      <section>
        <Heading variation="h2" className="observable">
          Getting Started
        </Heading>
      </section>

      <section>
        <Heading variation="h2" size="L" className="observable">
          Build project
        </Heading>
        <Text>you can build the project as a library, or as development build.</Text>
        <Text>Use this mode: </Text>
        <CodeBlock>{`npm run build-preview`}</CodeBlock>
        <Text>
          for when you are ready to deploy on production, and use this npm build command while in development:
        </Text>
        <CodeBlock>{`npm run dev`}</CodeBlock>
      </section>
    </article>
  );
};

export default GettingStarted;

import { CodeBlock, Heading, Layout, Text } from '@fightclub/components';

const GettingStarted = () => {
  return (
    <article>
      <Heading variation="h1" size="level1" data-observable="true">
        Getting Started
      </Heading>
      <Layout>
        <Heading variation="h2" size="level2" data-observable="true">
          Installation
        </Heading>
        <Text>Status: work in progress</Text>
        <CodeBlock>{`npm i @${import.meta.env.VITE_UI_ALIAS_NAME}/ui`}</CodeBlock>
      </Layout>

      <Layout>
        <Heading variation="h2" size="level2" data-observable="true">
          Run in development
        </Heading>
        <Text>Use this npm build command while in development:</Text>
        <CodeBlock>{`npm run dev`}</CodeBlock>
      </Layout>

      <Layout>
        <Heading variation="h2" size="level2" data-observable="true">
          Build project for production
        </Heading>
        <Text>You can build the project as a library.</Text>
        <Text>Use this mode for when you are ready to deploy on production: </Text>
        <CodeBlock>{`npm run build`}</CodeBlock>
      </Layout>
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

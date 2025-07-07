import { Link } from 'react-router-dom';
import { CodeBlock, Heading, Layout, Text } from '@/components';
import { CodeInline } from '@/components/CodeInline';

const GettingStarted = () => {
  return (
    <article>
      <Heading as="h1" data-observable="true">
        Getting Started
      </Heading>
      <Layout>
        <Heading as="h2" data-observable="true">
          Installation
        </Heading>
        <Link target="_blank" to="https://www.npmjs.com/package/@fightclub/ui">
          https://www.npmjs.com/package/@fightclub/ui
        </Link>
        <Text>Status: work in progress</Text>
        <CodeInline value={`npm i @${import.meta.env.VITE_UI_ALIAS_NAME}/ui`} />
      </Layout>

      <Layout>
        <Heading as="h2" data-observable="true">
          Run in development
        </Heading>
        <Text>Use this npm build command while in development:</Text>
        <CodeInline value={`npm run dev`} />
      </Layout>

      <Layout>
        <Heading as="h2" data-observable="true">
          Build project for production
        </Heading>
        <Text>You can build the project as a library.</Text>
        <Text>Use this mode for when you are ready to deploy on production: </Text>
        <CodeInline value={`npm run build`} />
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

import { Heading, Layout, Divider, Tabs, CodeBlock } from '@/components';
import Code from './code.mdx';

const DividerExample = () => {
  let preview = (
    <>
      <Heading as="h5" className="text-xl">
        Divider (horizontal)
      </Heading>
      <Layout>
        hello
        <Divider variation="horizontal" />
        world
      </Layout>

      <Heading as="h5" className="text-xl">
        Divider labelled (horizontal)
      </Heading>
      <Layout>
        hello
        <Divider variation="horizontal">OR</Divider>
        world
      </Layout>

      <Heading as="h5" className="text-xl">
        Divider (vertical)
      </Heading>
      <Layout>
        <div style={{ height: '300px', background: `rgba(255, 0, 0, 0.5)` }} className="flex flex-start items-start">
          hello
          <Divider variation="vertical" />
          world
        </div>
      </Layout>

      <Heading as="h5" className="text-xl">
        Divider labelled (vertical)
      </Heading>
      <Layout>
        <div style={{ height: '300px', background: `rgba(255, 0, 0, 0.1)` }} className="flex flex-start items-start">
          hello<Divider variation="vertical">OR</Divider>
          world
        </div>
      </Layout>
    </>
  );

  return (
    <>
      <Heading as="h1" className="text-xl" data-observable="true">
        Divider
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock>
              <Code />
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};
export default DividerExample;

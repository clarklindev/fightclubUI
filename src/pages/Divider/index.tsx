import { Heading, Layout, Divider, Text, Tabs, CodeBlock } from '@swagfinger/components';
import { CodeBlockProvider } from '@swagfinger/context/CodeBlockContext';

const DividerExample = () => {
  let preview = (
    <>
      <Heading variation="h5">Divider (horizontal)</Heading>
      <Layout>
        hello
        <Divider variation="horizontal" />
        world
      </Layout>

      <Heading variation="h5">Divider labelled (horizontal)</Heading>
      <Layout>
        hello
        <Divider variation="horizontal">OR</Divider>
        world
      </Layout>

      <Heading variation="h5">Divider (vertical)</Heading>
      <Layout>
        <div style={{ height: '300px', background: `rgba(255, 0, 0, 0.5)` }} className="flex flex-start items-start">
          hello
          <Divider variation="vertical" />
          world
        </div>
      </Layout>

      <Heading variation="h5">Divider labelled (vertical)</Heading>
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
      <Heading variation="h1" data-observable="true">
        Divider
      </Heading>

      <CodeBlockProvider>
        <Tabs>
          <Tabs.TriggerGroup>
            <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
            <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
          </Tabs.TriggerGroup>
          <Tabs.ContentGroup>
            <Tabs.Content data-tab="0">{preview}</Tabs.Content>
            <Tabs.Content data-tab="1">
              <CodeBlock>{preview}</CodeBlock>
            </Tabs.Content>
          </Tabs.ContentGroup>
        </Tabs>
      </CodeBlockProvider>
    </>
  );
};
export default DividerExample;

import { Badge, CodeBlock, Heading, Layout, Tabs } from '@/components';

import Code from './code.mdx';

const BadgeExample = () => {
  const preview = (
    <>
      <Layout>
        <Badge intent="outline">Hello</Badge>
      </Layout>
      <Layout>
        <Badge intent="contained">Hello</Badge>
      </Layout>
    </>
  );
  return (
    <>
      <Heading as="h1" className="text-xl" data-observable="true">
        Badge
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

export default BadgeExample;

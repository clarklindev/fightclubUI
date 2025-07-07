import { Heading, Label, Icon, Layout, Tabs, CodeBlock } from '@/components';
import { ShoppingCartIcon } from '@/icons';

import Code from './code.mdx';

const LabelExample = () => {
  const preview = (
    <>
      {/* left */}
      <Layout>
        <Label label="hi" labelDirection="left">
          <Icon size="L">
            <ShoppingCartIcon />
          </Icon>
        </Label>
      </Layout>

      {/* right */}
      <Layout>
        <Label label="hi" labelDirection="right">
          <Icon size="L">
            <ShoppingCartIcon />
          </Icon>
        </Label>
      </Layout>

      {/* top */}
      <Layout>
        <Label label="hi" labelDirection="top">
          <Icon size="L">
            <ShoppingCartIcon />
          </Icon>
        </Label>
      </Layout>

      {/* bottom */}
      <Layout>
        <Label label="hi" labelDirection="bottom">
          <Icon size="L">
            <ShoppingCartIcon />
          </Icon>
        </Label>
      </Layout>
    </>
  );

  return (
    <>
      <Heading as="h1" data-observable="true">
        Label
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

export default LabelExample;

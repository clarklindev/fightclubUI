import { CodeBlock, Heading, Layout, Tabs, Button, Icon, Label } from '@/components';
import { ShoppingCartIcon, ThumbsUpIcon } from '@/icons';
import Code from './code.mdx';

const ButtonExample = () => {
  const preview = (
    <>
      <Layout>
        <Heading as="h5">Contained button</Heading>
        <Button intent="primary">Contained</Button>
      </Layout>

      <Layout>
        <Heading as="h5">Outlined button</Heading>
        <Button intent="outlined">Outlined</Button>
      </Layout>

      <Layout>
        <Heading as="h5">Icon button</Heading>

        <Button intent="icon">
          <Icon size="L">
            <ShoppingCartIcon />
          </Icon>
        </Button>
      </Layout>

      <Layout>
        <Heading as="h5">Text button</Heading>
        <Button intent="text">Text</Button>
      </Layout>

      <Layout>
        <Heading as="h5">Button + Label</Heading>
        <Button intent="primary">
          <Label gap="2" label="right" labelDirection="right" labelClickable={true}>
            <Icon size="L">
              <ThumbsUpIcon />
            </Icon>
          </Label>
        </Button>
      </Layout>
    </>
  );

  return (
    <>
      <Heading as="h1" data-observable="true">
        Button
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

export default ButtonExample;

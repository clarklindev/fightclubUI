import { CodeBlock, Heading, Layout, Tabs, Button, Icon, Label } from '@swagfinger/components';
import { ShoppingCartIcon, ThumbsUpIcon } from '@swagfinger/icons';
import reactElementToJSXString from 'react-element-to-jsx-string';

const ButtonExample = () => {
  const preview = (
    <>
      <Layout>
        <Heading variation="h5" size="level2">
          Contained button
        </Heading>
        <Button intent="primary">Contained</Button>
      </Layout>

      <Layout>
        <Heading variation="h5" size="level2">
          Outlined button
        </Heading>
        <Button intent="outlined">Outlined</Button>
      </Layout>

      <Layout>
        <Heading variation="h5" size="level2">
          Icon button
        </Heading>

        <Button intent="icon">
          <Icon size="L">
            <ShoppingCartIcon />
          </Icon>
        </Button>
      </Layout>

      <Layout>
        <Heading variation="h5" size="level2">
          Text button
        </Heading>
        <Button intent="text">Text</Button>
      </Layout>

      <Layout>
        <Heading variation="h5" size="level2">
          Button + Label
        </Heading>
        <Button intent="contained" className="bg-red-500 hover:bg-red-600 text-white">
          <Label gap="10px" label="right" labelDirection="right">
            <Icon size="L">
              <ThumbsUpIcon stroke="blue" />
            </Icon>
          </Label>
        </Button>
      </Layout>
    </>
  );
  {
    /* 
     
      <Layout>
        <Heading variation="h5">Text button</Heading>
        <ButtonTextExample />
      </Layout>

      <Layout>
        <Heading variation="h5">Icon button</Heading>
        <ButtonIconExample />
      </Layout>

      <Layout>
        <Heading variation="h5">Button+Label button</Heading>
        <ButtonWithLabelSomethingExample />
      </Layout> */
  }

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
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
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default ButtonExample;

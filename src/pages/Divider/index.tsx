import { Heading, Layout, ResizePanel, Divider, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const DividerExample = () => {
  const preview = (
    <>
      <Layout variation="block">
        <Heading variation="h5">Divider (horizontal)</Heading>
        <Divider variation="horizontal" />
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider labelled (horizontal)</Heading>
        <Divider variation="horizontal">OR</Divider>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider (vertical)</Heading>
        <Divider variation="vertical" />
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider labelled (vertical)</Heading>
        <Divider variation="vertical" gap="5px">
          OR
        </Divider>
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
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
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};
export default DividerExample;

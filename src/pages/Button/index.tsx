import { CodeBlock, Heading, Layout, Tabs } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

import ButtonContainedExample from './ButtonContainedExample';
import ButtonOutlinedExample from './ButtonOutlinedExample';
import ButtonTextExample from './ButtonTextExample';
import ButtonIconExample from './ButtonIconExample';
import ButtonWithLabelSomethingExample from './ButtonWithLabelSomethingExample';

const ButtonExample = () => {
  const preview = (
    <>
      <Layout variation="block">
        <Heading variation="h5">Contained button</Heading>
        <ButtonContainedExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Outlined button</Heading>
        <ButtonOutlinedExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Text button</Heading>
        <ButtonTextExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Icon button</Heading>
        <ButtonIconExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Button+LabelSomething button</Heading>
        <ButtonWithLabelSomethingExample />
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
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

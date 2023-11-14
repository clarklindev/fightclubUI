import { Layout, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

import InputBasicExample from './InputBasicExample';
import InputReadOnlyExample from './InputReadOnlyExample';
import InputWithIconExample from './InputWithIconExample';
import InputNoBorderExample from './InputNoBorderExample';
import InputPasswordExample from './InputPasswordExample';
import InputFilterExample from './InputFilterExample';
import InputSearchExample from './InputSearchExample';

const InputExample = () => {
  const preview = (
    <>
      <Layout variation="block">
        <Heading variation="h5">Input (no-border)</Heading>
        <InputNoBorderExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Basic input</Heading>
        <InputBasicExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input (readonly)</Heading>
        <InputReadOnlyExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input + Icon</Heading>
        <InputWithIconExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Password</Heading>
        <InputPasswordExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Filter</Heading>
        <InputFilterExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Search</Heading>
        <InputSearchExample />
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Input
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

export default InputExample;

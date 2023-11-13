import { Layout, Heading, Tabs, CodeBlock } from '@swagfinger/components';

import InputBasicExample from './InputBasicExample';
import InputReadOnlyExample from './InputReadOnlyExample';
import InputWithIconExample from './InputWithIconExample';
import InputNoBorderExample from './InputNoBorderExample';
import InputPasswordExample from './InputPasswordExample';
import InputFilterExample from './InputFilterExample';
import InputSearchExample from './InputSearchExample';

const InputExample = () => {
  const preview_noborder = (
    <Layout variation="block">
      <Heading variation="h5">Input (no-border)</Heading>
      <InputNoBorderExample />
    </Layout>
  );

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Input
      </Heading>

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
};

export default InputExample;

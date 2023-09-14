import React from 'react';
import { Layout, Heading } from 'swagfingerui';

import InputBasicExample from './InputBasicExample';
import InputReadOnlyExample from './InputReadOnlyExample';
import InputWithIconExample from './InputWithIconExample';
import InputNoBorderExample from './InputNoBorderExample';
import InputPasswordExample from './InputPasswordExample';
import InputFilterExample from './InputFilterExample';
import InputSearchExample from './InputSearchExample';

const InputExample = () => {
  return (
    <>
      <Heading variation="h4">Input</Heading>

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
};

export default InputExample;

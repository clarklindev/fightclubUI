import { Layout, Heading } from '../../components';
import InputBasicExample from './InputBasicExample';
import InputReadOnlyExample from './InputReadOnlyExample';
import InputWithIconExample from './InputWithIconExample';
import InputNoBorderExample from './InputNoBorderExample';
import InputPasswordExample from './InputPasswordExample';
import InputFilterExample from './InputFilterExample';
import InputSearchExample from './InputSearchExample';
import { ResizePanel } from '../../components';

const InputExample = () => {
  return (
    <>
      <Heading variation="h4">Input</Heading>

      <Layout variation="block">
        <Heading variation="h5">Input (no-border)</Heading>
        <ResizePanel>
          <InputNoBorderExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Basic input</Heading>
        <ResizePanel>
          <InputBasicExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input (readonly)</Heading>
        <ResizePanel>
          <InputReadOnlyExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input + Icon</Heading>
        <ResizePanel>
          <InputWithIconExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Password</Heading>
        <ResizePanel>
          <InputPasswordExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Filter</Heading>
        <ResizePanel>
          <InputFilterExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Search</Heading>
        <ResizePanel>
          <InputSearchExample />
        </ResizePanel>
      </Layout>
    </>
  );
};

export default InputExample;

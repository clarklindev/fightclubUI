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
        <ResizePanel minWidth="0px">
          <InputNoBorderExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Basic input</Heading>
        <ResizePanel minWidth="0px">
          <InputBasicExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input (readonly)</Heading>
        <ResizePanel minWidth="0px">
          <InputReadOnlyExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input + Icon</Heading>
        <ResizePanel minWidth="0px">
          <InputWithIconExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Password</Heading>
        <ResizePanel minWidth="0px">
          <InputPasswordExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Filter</Heading>
        <ResizePanel minWidth="0px">
          <InputFilterExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Search</Heading>
        <ResizePanel minWidth="0px">
          <InputSearchExample />
        </ResizePanel>
      </Layout>
    </>
  );
};

export default InputExample;

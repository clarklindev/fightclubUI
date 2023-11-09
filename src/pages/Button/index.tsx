import { Heading, Layout, ResizePanel } from '@swagfinger/components';
import ButtonContainedExample from './ButtonContainedExample';
import ButtonOutlinedExample from './ButtonOutlinedExample';
import ButtonTextExample from './ButtonTextExample';
import ButtonIconExample from './ButtonIconExample';
import ButtonWithLabelSomethingExample from './ButtonWithLabelSomethingExample';

const ButtonExample = () => {
  return (
    <>
      <Layout variation="block">
        <Heading variation="h5">Contained button</Heading>
        <ResizePanel>
          <ButtonContainedExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Outlined button</Heading>
        <ResizePanel>
          <ButtonOutlinedExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Text button</Heading>
        <ResizePanel>
          <ButtonTextExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Icon button</Heading>
        <ResizePanel>
          <ButtonIconExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Button+LabelSomething button</Heading>
        <ResizePanel>
          <ButtonWithLabelSomethingExample />
        </ResizePanel>
      </Layout>
    </>
  );
};

export default ButtonExample;

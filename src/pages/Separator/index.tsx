import { Heading, Layout, ResizePanel, Separator } from '../../components';

const SeparatorExample = () => {
  return (
    <>
      <Heading variation="h4">Separator</Heading>
      <Layout variation="block">
        <Heading variation="h5">Separator (horizontal)</Heading>
        <ResizePanel>
          <Separator variation="horizontal" />
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Separator labelled (horizontal)</Heading>
        <ResizePanel>
          <Separator variation="horizontal">OR</Separator>
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Separator (vertical)</Heading>
        <ResizePanel>
          <Separator variation="vertical" height="30px" />
        </ResizePanel>
      </Layout>
    </>
  );
};
export default SeparatorExample;

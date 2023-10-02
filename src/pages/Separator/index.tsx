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
          <Separator variation="vertical" />
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Separator labelled (vertical)</Heading>
        <ResizePanel style={{ height: '300px' }}>
          <Separator variation="vertical" gap="5px">
            OR
          </Separator>
        </ResizePanel>
      </Layout>
    </>
  );
};
export default SeparatorExample;

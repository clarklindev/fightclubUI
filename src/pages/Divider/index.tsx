import { Heading, Layout, ResizePanel, Divider } from '@swagfinger/components';

const DividerExample = () => {
  return (
    <>
      <Heading variation="h1" data-observable="true">
        Divider
      </Heading>
      <Layout variation="block">
        <Heading variation="h5">Divider (horizontal)</Heading>
        <ResizePanel>
          <Divider variation="horizontal" />
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider labelled (horizontal)</Heading>
        <ResizePanel>
          <Divider variation="horizontal">OR</Divider>
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider (vertical)</Heading>
        <ResizePanel>
          <Divider variation="vertical" />
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider labelled (vertical)</Heading>
        <ResizePanel style={{ height: '300px' }}>
          <Divider variation="vertical" gap="5px">
            OR
          </Divider>
        </ResizePanel>
      </Layout>
    </>
  );
};
export default DividerExample;

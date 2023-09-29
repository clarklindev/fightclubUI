import { Heading, ResizePanel, Layout } from '../../components';

const HeadingExample = () => {
  return (
    <>
      <Heading variation="h4">Headings</Heading>

      <Layout variation="block">
        <ResizePanel style={{ alignItems: 'start' }}>
          <Heading variation="h1">H1 heading</Heading>
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <ResizePanel style={{ alignItems: 'start' }}>
          <Heading variation="h2">H2 heading</Heading>
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <ResizePanel style={{ alignItems: 'start' }}>
          <Heading variation="h3">H3 heading</Heading>
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <ResizePanel style={{ alignItems: 'start' }}>
          <Heading variation="h4">H4 heading</Heading>
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <ResizePanel style={{ alignItems: 'start' }}>
          <Heading variation="h5">H5 heading</Heading>
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <ResizePanel style={{ alignItems: 'start' }}>
          <Heading variation="h6">H6 heading</Heading>
        </ResizePanel>
      </Layout>
    </>
  );
};
export default HeadingExample;

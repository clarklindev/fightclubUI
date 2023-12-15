import { Heading, Layout, Text } from '@swagfinger/components';

const Layouts = () => {
  return (
    <div>
      <Heading variation="h1" size="level1" data-observable="true">
        Layout
      </Heading>
      <Layout>
        <Text>
          By creating different layouts, they allow you to present data differently. Layouts should be interchangeable
          for pages with ability to switch layouts from settings menu.
        </Text>
      </Layout>
    </div>
  );
};

export default Layouts;

import { Heading, Layout, Text } from '@swagfinger/components';

const Layouts = () => {
  return (
    <div>
      <Heading variation="h1" size="level1" data-observable="true">
        Layout
      </Heading>

      <Layout>
        <Text>The Layout component is specifically used to apply layout styles, this is different from Layouts.</Text>
        <br />
        <Text>
          Layouts is the template that defines the way items are placed on the page. By creating different layouts, they
          allow you to present data differently. Layouts should be interchangeable for pages with ability to switch
          layouts.
        </Text>
      </Layout>
    </div>
  );
};

export default Layouts;

import { Heading, Layout, Text } from '@/components';
import { CodeInline } from '@/components/CodeInline';

const Layouts = () => {
  return (
    <div>
      <Heading as="h1" className="text-xl" data-observable="true">
        Layout
      </Heading>

      <Layout>
        <Text>
          The Layout component is specifically used to apply layout styles (src/components/Layout.tsx), this is
          different from a page's Layouts (src/layouts/HomeLayout.tsx).
        </Text>
        <Text>
          Here is an example of how to use the Layout Component; You usually wrap other components with Layout. By
          default there is a tailwind class applied of `pb-8` (padding bottom)
          <br />
          <CodeInline
            value={`<Layout>
  <Heading as="h5" className="text-xl">
    Icon button
  </Heading>
</Layout>
`}
          />
        </Text>
        <br />
        <Text>
          Layouts on the otherhand is the template that defines the way items are placed on the page. By creating
          different layouts, they allow you to present data differently. Layouts should be interchangeable for pages
          with ability to switch layouts.
        </Text>
      </Layout>
    </div>
  );
};

export default Layouts;

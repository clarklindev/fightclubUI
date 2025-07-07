import { Heading, Text } from '@/components';
import { CodeInline } from '@/components/CodeInline';

const Section = () => {
  return (
    <div>
      <Heading as="h1" className="text-xl" data-observable="true">
        Section
      </Heading>
      <Text>
        The Section component is used to designate portions of a page. It is similar to Layout in that they are both
        used for laying out and styling on a page. In contrast, it is more sparingly used. The Section component has
        default mb-8 (margin bottom) <br />
        <CodeInline
          value={`
<Section>
    <Layout>
        <Heading as="h5" className="text-xl">
            Icon button
        </Heading>
    </Layout>
</Section>
`}
        />
      </Text>
    </div>
  );
};

export default Section;

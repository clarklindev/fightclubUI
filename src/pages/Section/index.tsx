import { Heading, Text } from '@fightclub/components';
import { CodeInline } from '@fightclub/components/CodeInline';

const Section = () => {
  return (
    <div>
      <Heading variation="h1" size="level1" data-observable="true">
        Section
      </Heading>
      <Text>
        The Section component is used to designate portions of a page. It is similar to Layout in that they are both used for laying out and styling on a page. 
        In contrast, it is more sparingly used. The Section component has default mb-8 (margin bottom) <br/>

        <CodeInline value={
`
<Section>
    <Layout>
        <Heading variation="h5" size="level2">
            Icon button
        </Heading>
    </Layout>
</Section>
`
        }/>
      </Text>
    </div>
  );
};

export default Section;

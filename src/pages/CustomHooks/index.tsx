import UseFocusExample from './UseFocusExample';

import { Heading, Layout } from '@swagfinger/components';

const HooksExample = () => {
  return (
    <>
      <Heading variation="h4" size="level1">
        Hooks
      </Heading>
      <Layout>
        <Heading variation="h5" size="level2">
          useFocus
        </Heading>
        <UseFocusExample />
      </Layout>
    </>
  );
};

export default HooksExample;

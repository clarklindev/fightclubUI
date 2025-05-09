import UseFocusExample from './UseFocusExample';

import { Heading, Layout } from '@fightclub/components';

const HooksExample = () => {
  return (
    <>
      <Heading as="h4" size="level1">
        Hooks
      </Heading>
      <Layout>
        <Heading as="h5" size="level2">
          useFocus
        </Heading>
        <UseFocusExample />
      </Layout>
    </>
  );
};

export default HooksExample;

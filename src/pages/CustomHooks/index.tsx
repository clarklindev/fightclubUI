import UseFocusExample from './UseFocusExample';

import { Heading, Layout } from '@/components';

const HooksExample = () => {
  return (
    <>
      <Heading as="h4" className="text-xl">
        Hooks
      </Heading>
      <Layout>
        <Heading as="h5" className="text-xl">
          useFocus
        </Heading>
        <UseFocusExample />
      </Layout>
    </>
  );
};

export default HooksExample;

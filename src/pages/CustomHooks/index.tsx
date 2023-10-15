import UseFocusExample from './UseFocusExample';

import { Heading, Layout } from '../../components';

const HooksExample = () => {
  return (
    <>
      <Heading variation="h4">Hooks</Heading>
      <Layout variation="block">
        <Heading variation="h5">useFocus</Heading>
        <UseFocusExample />
      </Layout>
    </>
  );
};

export default HooksExample;

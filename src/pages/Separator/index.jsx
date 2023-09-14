import React from 'react';
import { Heading, Layout } from '../../components';

import SeparatorHorizontalExample from './SeparatorHorizontalExample';
import SeparatorHorizontalLabelledExample from './SeparatorHorizontalLabelledExample';
import SeparatorVerticalExample from './SeparatorVerticalExample';

const SeparatorExample = () => {
  return (
    <>
      <Heading variation="h4">Separator</Heading>
      <Layout variation="block">
        <Heading variation="h5">Separator (horizontal)</Heading>
        <SeparatorHorizontalExample />
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Separator labelled (horizontal)</Heading>
        <SeparatorHorizontalLabelledExample />
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Separator (vertical)</Heading>
        <SeparatorVerticalExample />
      </Layout>
    </>
  );
};
export default SeparatorExample;

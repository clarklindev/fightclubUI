// //RadioButtonGroup
import React from 'react';
import { Layout, Heading } from '../../components';

import RadioButtonGroupVerticalExample from './RadioButtonGroupVerticalExample';
import RadioButtonGroupHorizontalExample from './RadioButtonGroupHorizontalExample';

const RadioButtonGroupExample = () => {
  return (
    <>
      <Heading variation="h4">RadioButton Group</Heading>
      <Layout variation="block">
        <Heading variation="h5">RadioButton Group (horizontal)</Heading>
        <RadioButtonGroupHorizontalExample />
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">RadioButton Group (vertical)</Heading>
        <RadioButtonGroupVerticalExample />
      </Layout>
    </>
  );
};

export default RadioButtonGroupExample;

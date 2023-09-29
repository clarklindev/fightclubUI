// //RadioButtonGroup

import { Layout, Heading, ResizePanel } from '../../components';
import RadioButtonGroupVerticalExample from './RadioButtonGroupVerticalExample';
import RadioButtonGroupHorizontalExample from './RadioButtonGroupHorizontalExample';

const RadioButtonGroupExample = () => {
  return (
    <>
      <Heading variation="h4">RadioButton Group</Heading>
      <Layout variation="block">
        <Heading variation="h5">RadioButton Group (horizontal)</Heading>
        <ResizePanel>
          <RadioButtonGroupHorizontalExample />
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">RadioButton Group (vertical)</Heading>
        <ResizePanel>
          <RadioButtonGroupVerticalExample />
        </ResizePanel>
      </Layout>
    </>
  );
};

export default RadioButtonGroupExample;

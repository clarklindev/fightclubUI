import { Heading, Layout, ResizePanel } from '@swagfinger/components';
import CheckboxGroupHorizontalExample from './CheckboxGroupHorizontalExample';
import CheckboxGroupVerticalExample from './CheckboxGroupVerticalExample';
import CheckboxGroupIndeterminateExample from './CheckboxGroupIndeterminateExample';

const CheckboxExample = () => {
  return (
    <>
      <Heading variation="h4">Checkbox Group</Heading>
      <Layout variation="block">
        <Heading variation="h5">Checkbox Group (horizontal)</Heading>
        <ResizePanel>
          <CheckboxGroupHorizontalExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Checkbox Group (vertical)</Heading>
        <ResizePanel>
          <CheckboxGroupVerticalExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Checkbox Group (indeterminate)</Heading>
        <ResizePanel>
          <CheckboxGroupIndeterminateExample />
        </ResizePanel>
      </Layout>
    </>
  );
};

export default CheckboxExample;

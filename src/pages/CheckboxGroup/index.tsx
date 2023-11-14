import reactElementToJSXString from 'react-element-to-jsx-string';
import { CodeBlock, Heading, Layout, Tabs } from '@swagfinger/components';

import CheckboxGroupHorizontalExample from './CheckboxGroupHorizontalExample';
import CheckboxGroupVerticalExample from './CheckboxGroupVerticalExample';
import CheckboxGroupIndeterminateExample from './CheckboxGroupIndeterminateExample';

const CheckboxExample = () => {
  const preview = (
    <>
      <Layout variation="block">
        <Heading variation="h5">Checkbox Group (horizontal)</Heading>
        <CheckboxGroupHorizontalExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Checkbox Group (vertical)</Heading>
        <CheckboxGroupVerticalExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Checkbox Group (indeterminate)</Heading>
        <CheckboxGroupIndeterminateExample />
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Checkbox Group
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default CheckboxExample;

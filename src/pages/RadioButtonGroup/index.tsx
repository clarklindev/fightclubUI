// //RadioButtonGroup
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Layout, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import RadioButtonGroupVerticalExample from './RadioButtonGroupVerticalExample';
import RadioButtonGroupHorizontalExample from './RadioButtonGroupHorizontalExample';

const RadioButtonGroupExample = () => {
  const preview = (
    <>
      <Layout>
        <Heading variation="h5">RadioButton Group (horizontal)</Heading>
        <RadioButtonGroupHorizontalExample />
      </Layout>
      <Layout>
        <Heading variation="h5">RadioButton Group (vertical)</Heading>
        <RadioButtonGroupVerticalExample />
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        RadioButton Group
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

export default RadioButtonGroupExample;

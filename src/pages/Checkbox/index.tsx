import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Checkbox, LabelSomething, Heading, ResizePanel, Tabs, CodeBlock } from '@swagfinger/components';

const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  const preview = (
    <LabelSomething
      label="label"
      labelDirection="right"
      gap="10px"
      something={
        <Checkbox
          checked={savedData}
          name="checkbox"
          onChange={event => {
            setSavedData(event.target.checked);
          }}
        />
      }
    />
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Checkbox
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

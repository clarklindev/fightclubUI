import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Checkbox, Label, Heading, Tabs, CodeBlock } from '@swagfinger/components';

const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  const preview = (
    <Label label="label" labelDirection="right" gap="2">
      <Checkbox
        size="XL"
        checked={savedData}
        name="checkbox"
        onChange={event => {
          setSavedData(event.target.checked);
        }}
      />
    </Label>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
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

import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { RadioButton, Heading, Tabs, CodeBlock } from '@swagfinger/components';

const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  const preview = (
    <RadioButton
      checked={savedData}
      name="radio"
      label="label"
      onChange={event => {
        setSavedData(event.target.checked);
      }}
    />
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        RadioButton
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

export default RadioButtonExample;

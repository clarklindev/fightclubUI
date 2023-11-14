import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { ToggleSwitch, Heading, Tabs, CodeBlock } from '@swagfinger/components';

const ToggleSwitchExample = () => {
  const [savedData, setSavedData] = useState(false);

  // ----------------------------------------------------------------
  const preview = (
    <ToggleSwitch
      savedData={savedData}
      color="grey"
      onChange={event => {
        setSavedData(event.target.checked);
      }}
    />
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Toggle Switch
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

export default ToggleSwitchExample;

import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Icon, ToggleButton, Heading, ResizePanel, Tabs, CodeBlock } from '@swagfinger/components';
import { HeartIcon } from '@swagfinger/icons';

const ToggleButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  const preview = (
    <ToggleButton
      checked={savedData}
      onChange={event => {
        setSavedData(event.target.checked);
      }}>
      <Icon
        size="25px"
        fill={savedData ? 'red' : 'black'}
        fillOpacity={savedData ? '1' : '0'}
        stroke={savedData ? 'transparent' : 'currentColor'}>
        <HeartIcon />
      </Icon>
    </ToggleButton>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Toggle Button
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

export default ToggleButtonExample;

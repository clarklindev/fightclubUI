import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { CodeBlock, Heading, Tabs } from '@swagfinger/components';

const Pagination = () => {
  const preview = <></>;

  const previewString = reactElementToJSXString(preview);

  return (
    <div>
      <Heading variation="h1" data-observable="true">
        Pagination
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
    </div>
  );
};

export default Pagination;

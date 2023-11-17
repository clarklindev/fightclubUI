import React, { useState } from 'react';
import * as ReactComponents from '@swagfinger/components';
import { Dropdown, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const DropdownExample = () => {
  const preview = (
    <Dropdown>
      <Dropdown.Wrapper id="2">
        <Dropdown.Trigger>hi</Dropdown.Trigger>
        <Dropdown.Menu className="w-40">
          <Dropdown.MenuItem>A</Dropdown.MenuItem>
          <Dropdown.MenuItem>B</Dropdown.MenuItem>
          <Dropdown.MenuItem>C</Dropdown.MenuItem>
          <Dropdown.MenuItem>D</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown.Wrapper>
    </Dropdown>
  );

  const previewString = reactElementToJSXString(preview);

  const [val, setVal] = useState(reactElementToJSXString(preview)); // Initialize as a string

  type ComponentsType = {
    [key: string]: React.ComponentType<any>;
  };
  const dynamicComponents: ComponentsType = {};
  const components = ReactComponents as ComponentsType;
  for (const componentName in components) {
    dynamicComponents[componentName] = components[componentName];
  }

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Dropdown
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>

        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock value={previewString} setValue={setVal} />
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default DropdownExample;

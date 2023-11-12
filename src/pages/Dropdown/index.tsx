import { Dropdown, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const DropdownExample = () => {
  const preview = (
    <Dropdown>
      <Dropdown.DropdownWrapper id="2">
        <Dropdown.DropdownTrigger>hi</Dropdown.DropdownTrigger>
        <Dropdown.DropdownMenu className="w-40">
          <Dropdown.DropdownMenuItem>A</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>B</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>C</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>D</Dropdown.DropdownMenuItem>
        </Dropdown.DropdownMenu>
      </Dropdown.DropdownWrapper>
    </Dropdown>
  );

  const previewString = reactElementToJSXString(preview);

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
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default DropdownExample;

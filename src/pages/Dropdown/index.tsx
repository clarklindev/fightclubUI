import { Dropdown, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import { CodeBlockProvider } from '@swagfinger/context/CodeBlockContext';

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

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
        Dropdown
      </Heading>

      <CodeBlockProvider>
        <Tabs>
          <Tabs.TriggerGroup>
            <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
            <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
          </Tabs.TriggerGroup>
          <Tabs.ContentGroup>
            <Tabs.Content data-tab="0">{preview}</Tabs.Content>
            <Tabs.Content data-tab="1">
              <CodeBlock>{preview}</CodeBlock>
            </Tabs.Content>
          </Tabs.ContentGroup>
        </Tabs>
      </CodeBlockProvider>
    </>
  );
};

export default DropdownExample;

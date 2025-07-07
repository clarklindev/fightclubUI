import { Dropdown, Button, Heading, Tabs, CodeBlock } from '@/components';
import Code from './code.mdx';

const DropdownExample = () => {
  const preview = (
    <Dropdown>
      <Dropdown.Wrapper>
        <Dropdown.Trigger>Button</Dropdown.Trigger>
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
      <Heading as="h1" className="text-xl" data-observable="true">
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
            <CodeBlock>
              <Code />
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default DropdownExample;

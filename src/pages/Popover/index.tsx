import { Popover, CodeBlock, Heading, Tabs } from '@/components';

import Code from './code.mdx';

const PopoverExample = () => {
  const preview = (
    <Popover>
      <Popover.Trigger>
        <button>Click to Toggle Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <div>
          <p>This is the content of the popover!</p>
        </div>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <Heading as="h1" className="text-xl" data-observable="true">
        Popover
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

export default PopoverExample;

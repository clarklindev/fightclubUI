import { Datepicker, CodeBlock, Heading, Layout, Tabs } from '@fightclub/components';

import Code from './code.mdx';

const DatepickerExample = () => {
  const preview = (
    <>
      <Datepicker />
    </>
  );
  return (
    <>
      <Heading as="h1" size="level1" data-observable="true">
        Datepicker
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

export default DatepickerExample;

import { Card, CodeBlock, Heading, Tabs } from '@fightclub/components';

import Code from './code.mdx';

const CardExample = () => {
  const preview = <Card className="p-2">this is dummy text</Card>;

  return (
    <>
      <Heading as="h1" size="level1" data-observable="true">
        Card
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

export default CardExample;

import { Badge, Heading, Tabs } from '@fightclub/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Code from './Code.mdx';

const BadgeExample = () => {
  const preview = <Badge>Hello</Badge>;

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
        Badge
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>

        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <Code/>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default BadgeExample;

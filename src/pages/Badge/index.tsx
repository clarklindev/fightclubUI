import { Badge, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const BadgeExample = () => {
  const preview = <Badge>Hello</Badge>;
  const previewString = `
  import {Badge} from '@swagfinger/components';
  ${reactElementToJSXString(preview)}
  `;

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
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default BadgeExample;

//new
import { Tree, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

// only endnodes can be links
const TreeExample = () => {
  const data = [
    {
      label: 'A',
      children: [{ label: 'childroute', path: '/404' }],
    },
    {
      label: 'B',
      children: [{ label: 'childroute', path: '/404' }],
    },
    {
      label: 'C',
      children: [{ label: 'childroute', path: '/404' }],
    },
  ];

  const preview = <Tree data={data}></Tree>;
  const previewString = reactElementToJSXString(preview);

  // requires data to be structured with "label" and "children" properties
  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
        Tree
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

export default TreeExample;

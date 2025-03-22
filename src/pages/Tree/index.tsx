//new
import { Tree, Heading, Tabs } from '@fightclub/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Code from './code.mdx';

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
            <Code/>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default TreeExample;

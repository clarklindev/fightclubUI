import { Tabs, Heading, CodeBlock, Text } from '../../components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const TabsExample = () => {
  const tabsData = [
    {
      label: 'code',
      content: (
        <>
          tabsData should have this format: <br />
          <CodeBlock>
            {`const tabsData = [
  { label: 'label 1', content: 'content 1' }, 
  { label:  'label 2', content: 'content 2' }
]`}
          </CodeBlock>
          <br />
          <CodeBlock>
            {`<Tabs>
  <Tabs.TabWrapper data={tabsData}>
    <Tabs.TabHeaders />
    <Tabs.TabContent />
  </Tabs.TabWrapper>
</Tabs>
`}
          </CodeBlock>
        </>
      ),
    },
  ];

  return (
    <>
      <Heading variation="h4">Tabs</Heading>

      <Tabs>
        <Tabs.TabWrapper data={tabsData}>
          <Tabs.TabHeaders />
          <Tabs.TabContent />
        </Tabs.TabWrapper>
      </Tabs>
    </>
  );
};

export default TabsExample;

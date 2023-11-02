import { Tabs, Heading } from '../../components';

const TabsExample = () => {
  const tabsData = [
    { label: 'tab1', content: 'content for tab 1' },
    { label: 'tab2', content: 'content for tab 2' },
    { label: 'tab3', content: 'content for tab 3' },
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

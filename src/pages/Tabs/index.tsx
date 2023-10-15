import { Tabs, Heading } from '../../components';

const TabsExample = () => {
  return (
    <>
      <Heading variation="h4">Tabs</Heading>
      <Tabs>
        <Tabs.TabHeaders />
        <Tabs.TabDetails />
      </Tabs>
    </>
  );
};

export default TabsExample;

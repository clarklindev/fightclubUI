import { Spinner, Heading, Tabs } from '@fightclub/components';
import Code from './code.mdx';

const SpinnerExample = () => {
  const preview = <Spinner size="35" color="red" />;

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
        Spinner
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

export default SpinnerExample;

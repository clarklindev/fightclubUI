import { CodeBlock, Heading, Layout, ProgressLoader, Tabs, Text } from '@fightclub/components';
import { ResizePanel } from '@fightclub/components';
import Code from './code.mdx';

const ProgressLoaderExample = () => {
  const preview = (
    <div className="flex flex-col gap-10">
      <ResizePanel>
        <ProgressLoader progress={25} size={35} color="red" />
      </ResizePanel>

      <ResizePanel>
        <ProgressLoader progress={50} size={35} color="red" />
      </ResizePanel>

      <ResizePanel>
        <ProgressLoader progress={75} size={35} color="red" />
      </ResizePanel>

      <ResizePanel>
        <ProgressLoader progress={100} size={35} color="red" />
      </ResizePanel>
    </div>
  );

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
        Progress Loader
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock><Code/></CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default ProgressLoaderExample;

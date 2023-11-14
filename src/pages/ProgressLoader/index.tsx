import reactElementToJSXString from 'react-element-to-jsx-string';

import { CodeBlock, Heading, ProgressLoader, Tabs } from '@swagfinger/components';
import { ResizePanel } from '@swagfinger/components';

const ProgressLoaderExample = () => {
  const preview = (
    <div className="flex flex-col gap-10">
      <ResizePanel>
        <ProgressLoader progress={25} size={15} />
      </ResizePanel>

      <ResizePanel>
        <ProgressLoader progress={50} size={15} />
      </ResizePanel>

      <ResizePanel>
        <ProgressLoader progress={75} size={15} />
      </ResizePanel>

      <ResizePanel>
        <ProgressLoader progress={100} size={15} />
      </ResizePanel>
    </div>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
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
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default ProgressLoaderExample;

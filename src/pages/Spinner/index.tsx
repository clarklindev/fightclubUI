import { Spinner, Heading, Tabs, CodeBlock } from '@/components';
import Code from './code.mdx';

const SpinnerExample = () => {
  const preview = <Spinner size="35" color="red" />;

  return (
    <>
      <Heading as="h1" className="text-xl" data-observable="true">
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
            <CodeBlock>
              <Code />
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default SpinnerExample;

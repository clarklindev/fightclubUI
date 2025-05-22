import { Heading, Tabs, Section, CodeBlock } from '@fightclub/components';
import Code from './code.mdx';

const HeadingExample = () => {
  const preview = (
    <>
      <Heading as="h1" className="text-6xl">
        H1 heading
      </Heading>
      <Heading as="h2" className="text-4xl">
        H2 heading
      </Heading>
      <Heading as="h3" className="text-3xl">
        H3 heading
      </Heading>
      <Heading as="h4" className="text-2xl">
        H4 heading
      </Heading>
      <Heading as="h5" className="text-xl">
        H5 heading
      </Heading>
      <Heading as="h6" className="text-m">
        H6 heading
      </Heading>
    </>
  );

  return (
    <Section>
      <Heading as="h1" className="text-3xl" data-observable="true">
        Heading
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
    </Section>
  );
};
export default HeadingExample;

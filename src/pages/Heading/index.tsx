import { Heading, Tabs, Section, CodeBlock } from '@fightclub/components';
import Code from "./code.mdx";

const HeadingExample = () => {
  const preview = (
    <>
      <Heading variation="h1" size="level1">
        H1 heading
      </Heading>
      <Heading variation="h2" size="level2">
        H2 heading
      </Heading>
      <Heading variation="h3" size="level3">
        H3 heading
      </Heading>
      <Heading variation="h4" size="level4">
        H4 heading
      </Heading>
      <Heading variation="h5" size="level5">
        H5 heading
      </Heading>
      <Heading variation="h6" size="level6">
        H6 heading
      </Heading>
    </>
  );

  return (
    <Section>
      <Heading variation="h1" size="level1" data-observable="true">
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
              <CodeBlock><Code/></CodeBlock>
            </Tabs.Content>
          </Tabs.ContentGroup>
        </Tabs>
    </Section>
  );
};
export default HeadingExample;

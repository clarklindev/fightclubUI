import { Heading, H1, H2, H3, H4, H5, H6, Layout, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

import AccordionChevronExample from './AccordionChevronExample';
import AccordionPlusMinusExample from './AccordionPlusMinusExample';
import AccordionMinimalExample from './AccordionMinimalExample';

const AccordionExample = () => {
  const preview = (
    <>
      <Layout variation="block">
        <Heading variation="h5">Accordion (chevron)</Heading>
        <AccordionChevronExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Accordion (plus/minus)</Heading>
        <AccordionPlusMinusExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Accordion (minimal)</Heading>
        <AccordionMinimalExample />
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Accordion
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
export default AccordionExample;

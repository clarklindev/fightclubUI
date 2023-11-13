import { Heading, ResizePanel, H1, H2, H3, H4, H5, H6, Layout } from '@swagfinger/components';
import AccordionChevronExample from './AccordionChevronExample';
import AccordionPlusMinusExample from './AccordionPlusMinusExample';
import AccordionMinimalExample from './AccordionMinimalExample';
const AccordionExample = () => {
  return (
    <>
      <Heading variation="h1" data-observable="true">
        Accordion
      </Heading>

      <Layout variation="block">
        <Heading variation="h5">Accordion (chevron)</Heading>
        <ResizePanel>
          <AccordionChevronExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Accordion (plus/minus)</Heading>
        <ResizePanel>
          <AccordionPlusMinusExample />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Accordion (minimal)</Heading>
        <ResizePanel>
          <AccordionMinimalExample />
        </ResizePanel>
      </Layout>
    </>
  );
};
export default AccordionExample;

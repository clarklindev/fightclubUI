import { Heading, Layout } from '../../components';
import AccordionChevronExample from './AccordionChevronExample';
import AccordionPlusMinusExample from './AccordionPlusMinusExample';
import AccordionMinimalExample from './AccordionMinimalExample';
import { ResizePanel } from '../../components';
const AccordionExample = () => {
  return (
    <>
      <Heading variation="h4">Accordion</Heading>

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

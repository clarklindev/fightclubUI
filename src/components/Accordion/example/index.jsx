import React from 'react';

import AccordionChevronExample from './AccordionChevronExample';
import AccordionPlusMinusExample from './AccordionPlusMinusExample';
import AccordionMinimalExample from './AccordionMinimalExample';

import Heading from '../../Heading';
import Layout from '../../Layout';

const AccordionExample = ()=>{
  return (
    <>
      <Heading variation='h4'>Accordion</Heading>

      <Layout variation='block'>
        <Heading variation='h5'>Accordion (chevron)</Heading>
        <AccordionChevronExample />
      </Layout>

      <Layout variation='block'>
        <Heading variation='h5'>Accordion (plus/minus)</Heading>
        <AccordionPlusMinusExample />
      </Layout>

      <Layout variation='block'>
        <Heading variation='h5'>Accordion (minimal)</Heading>
        <AccordionMinimalExample />
      </Layout>
    </>
  )
}
export default AccordionExample;


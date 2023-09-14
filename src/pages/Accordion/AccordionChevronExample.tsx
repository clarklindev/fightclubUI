import React from 'react';
import { Accordion } from 'swagfingerui';

import { data } from './data';

const AccordionChevronExample = () => {
  return <Accordion data={data} multiOpen={true} iconType="chevron" />;
};

export default AccordionChevronExample;

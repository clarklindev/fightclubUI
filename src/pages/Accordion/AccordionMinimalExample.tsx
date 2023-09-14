import React from 'react';
import { Accordion } from 'swagfingerui';

import { data } from './data';

const AccordionMinimalExample = () => {
  return (
    <Accordion
      data={data}
      multiOpen={true}
      iconType="hidden"
      showSeparator={false}
    />
  );
};

export default AccordionMinimalExample;

import React from 'react';
import Accordion from '../index';

import { data } from './data';

const AccordionPlusMinusExample = () => {
  return (
    <Accordion
      data={data}
      multiOpen={true}
      iconType='plusminus'
      showSeparator={true}
    />
  );
};

export default AccordionPlusMinusExample;

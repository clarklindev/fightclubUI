import React from 'react';

import { Accordion } from '../../components';
import { data } from './data';

const AccordionChevronExample = () => {
  return <Accordion data={data} multiOpen={true} showSeparator={false} iconType="chevron" />;
};

export default AccordionChevronExample;

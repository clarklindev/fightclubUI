import { Accordion } from '../../components';

import { data } from './data';

const AccordionChevronExample = () => {
  return <Accordion data={data} multiOpen={true} iconType="chevron" />;
};

export default AccordionChevronExample;

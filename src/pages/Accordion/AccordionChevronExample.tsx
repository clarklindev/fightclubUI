import { Accordion } from '@swagfinger/components';
import { data } from './data';

const AccordionChevronExample = () => {
  return <Accordion data={data} multiOpen={true} showDivider={false} iconType="chevron" />;
};

export default AccordionChevronExample;

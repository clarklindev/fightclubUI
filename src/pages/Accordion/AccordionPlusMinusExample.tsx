import { Accordion } from '@swagfinger/components';
import { data } from './data';

const AccordionPlusMinusExample = () => {
  return <Accordion data={data} multiOpen={true} iconType="plusminus" showDivider={false} />;
};

export default AccordionPlusMinusExample;

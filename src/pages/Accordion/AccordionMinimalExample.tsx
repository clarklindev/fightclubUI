import { Accordion } from '../../components';
import { data } from './data';

const AccordionMinimalExample = () => {
  return <Accordion data={data} multiOpen={true} iconType="hidden" showDivider={false} />;
};

export default AccordionMinimalExample;

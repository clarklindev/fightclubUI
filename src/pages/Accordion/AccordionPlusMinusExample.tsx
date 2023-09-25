import { Accordion } from '../../components';
import { data } from './data';

const AccordionPlusMinusExample = () => {
  return <Accordion data={data} multiOpen={true} iconType="plusminus" showSeparator={false} />;
};

export default AccordionPlusMinusExample;

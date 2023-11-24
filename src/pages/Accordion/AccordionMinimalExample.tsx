import { Accordion } from '@swagfinger/components';

const AccordionMinimalExample = () => {
  const data = [
    {
      title: 'helloworld',
      body: ' this is my first answer',
    },
    {
      title: 'rainbow',
      body: 'rainbows are amazing',
    },
    {
      title: 'sun',
      body: 'the sun is amazing',
    },
  ];

  return <Accordion data={data} multiOpen={true} iconType="hidden" showDivider={false} />;
};

export default AccordionMinimalExample;

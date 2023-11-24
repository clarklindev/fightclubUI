import { Accordion } from '@swagfinger/components';

const AccordionChevronExample = () => {
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

  return <Accordion data={data} multiOpen={true} showDivider={false} iconType="chevron" />;
};

export default AccordionChevronExample;

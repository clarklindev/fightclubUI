import { Card, Heading, ResizePanel } from '@swagfinger/components';

const CardExample = () => {
  return (
    <>
      <Heading variation="h1" data-observable="true">
        Card
      </Heading>
      <ResizePanel>
        <Card>this is dummy text</Card>
      </ResizePanel>
    </>
  );
};

export default CardExample;

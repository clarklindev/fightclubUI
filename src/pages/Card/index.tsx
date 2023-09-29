import { Card, Heading, ResizePanel } from '../../components';

const CardExample = () => {
  return (
    <>
      <Heading variation="h4">Card</Heading>
      <ResizePanel>
        <Card color="white" borderColor="#DDD" borderRadius="10px" height="200px">
          this is dummy text
        </Card>
      </ResizePanel>
    </>
  );
};

export default CardExample;

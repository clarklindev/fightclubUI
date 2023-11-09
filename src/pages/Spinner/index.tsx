import { Spinner, Heading, ResizePanel } from '@swagfinger/components';

const SpinnerExample = () => {
  return (
    <>
      <Heading variation="h4">Spinner</Heading>

      <ResizePanel>
        <Spinner size="15px" />
      </ResizePanel>
    </>
  );
};

export default SpinnerExample;

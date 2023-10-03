import { Spinner, Heading } from '../../components';
import { ResizePanel } from '../../components';

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

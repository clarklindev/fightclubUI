import { Heading, ProgressLoader } from '../../components';
import { ResizePanel } from '../../components';

const ProgressLoaderExample = () => {
  return (
    <>
      <Heading variation="h4">Progress Loader</Heading>
      <div className="flex flex-col gap-10">
        <ResizePanel>
          <ProgressLoader progress={25} size={20} />
        </ResizePanel>

        <ResizePanel>
          <ProgressLoader progress={50} size={20} />
        </ResizePanel>

        <ResizePanel>
          <ProgressLoader progress={75} size={20} />
        </ResizePanel>

        <ResizePanel>
          <ProgressLoader progress={100} size={20} />
        </ResizePanel>
      </div>
    </>
  );
};

export default ProgressLoaderExample;

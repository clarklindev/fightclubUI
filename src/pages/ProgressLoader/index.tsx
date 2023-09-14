import { Heading, ProgressLoader } from '../../components';

const ProgressLoaderExample = () => {
  return (
    <>
      <Heading variation="h4">Progress Loader</Heading>
      <div className="flex flex-col gap-10">
        <ProgressLoader progress={25} size={30} />
        <ProgressLoader progress={50} size={30} />
        <ProgressLoader progress={75} size={30} />
        <ProgressLoader progress={100} size={30} />
      </div>
    </>
  );
};

export default ProgressLoaderExample;

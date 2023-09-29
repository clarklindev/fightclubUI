import { ResizePanel } from '../../components';
import { Heading } from '../../components';

const ResizePanelExample = () => {
  return (
    <>
      <Heading variation="h4">Resize panel</Heading>
      <ResizePanel style={{ padding: '0px', height: '300px' }} />
    </>
  );
};

export default ResizePanelExample;

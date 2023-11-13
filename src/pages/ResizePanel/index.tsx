import { Heading, ResizePanel } from '@swagfinger/components';

const ResizePanelExample = () => {
  return (
    <>
      <Heading variation="h1" data-observable="true">
        Resize panel
      </Heading>

      <ResizePanel style={{ padding: '0px', minWidth: '200px' }} />
    </>
  );
};

export default ResizePanelExample;

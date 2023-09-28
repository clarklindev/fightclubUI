import { Heading, Layout, ResizePanel } from '../../components';
import SeparatorHorizontalExample from './SeparatorHorizontalExample';
import SeparatorHorizontalLabelledExample from './SeparatorHorizontalLabelledExample';
import SeparatorVerticalExample from './SeparatorVerticalExample';

const SeparatorExample = () => {
  return (
    <>
      <Heading variation="h4">Separator</Heading>
      <Layout variation="block">
        <Heading variation="h5">Separator (horizontal)</Heading>
        <ResizePanel>
          <SeparatorHorizontalExample />
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Separator labelled (horizontal)</Heading>
        <ResizePanel>
          <SeparatorHorizontalLabelledExample />
        </ResizePanel>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Separator (vertical)</Heading>
        <ResizePanel>
          <SeparatorVerticalExample />
        </ResizePanel>
      </Layout>
    </>
  );
};
export default SeparatorExample;

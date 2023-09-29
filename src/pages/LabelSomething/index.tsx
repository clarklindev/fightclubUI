import { Heading, LabelSomething, Icon, ResizePanel, Layout } from '../../components';
import { SmileyIcon } from '../../icons';

const LabelSomethingExample = () => {
  const icon = <SmileyIcon />;

  return (
    <>
      <Heading variation="h4">LabelSomething</Heading>

      <Layout variation="block">
        <ResizePanel>
          <LabelSomething gap="5px" label="left" labelDirection="left" something={<Icon size="20px">{icon}</Icon>} />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <ResizePanel>
          <LabelSomething gap="5px" label="right" labelDirection="right" something={<Icon size="20px">{icon}</Icon>} />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <ResizePanel>
          <LabelSomething gap="5px" label="top" labelDirection="top" something={<Icon size="20px">{icon}</Icon>} />
        </ResizePanel>
      </Layout>

      <Layout variation="block">
        <ResizePanel>
          <LabelSomething
            gap="5px"
            label="bottom"
            labelDirection="bottom"
            something={<Icon size="20px">{icon}</Icon>}
          />
        </ResizePanel>
      </Layout>
    </>
  );
};

export default LabelSomethingExample;

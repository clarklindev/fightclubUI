import { Heading, LabelSomething, Icon } from '../../components';
import { SmileyIcon } from '../../icons';

const LabelSomethingExample = () => {
  const icon = <SmileyIcon />;

  return (
    <div className="flex justify-items-start items-start flex-col">
      <Heading variation="h4">LabelSomething</Heading>

      <div className="flex flex-col gap-10 justify-items-starts">
        <LabelSomething gap="5px" label="left" labelDirection="left" something={<Icon size="20px">{icon}</Icon>} />
        <LabelSomething gap="5px" label="right" labelDirection="right" something={<Icon size="20px">{icon}</Icon>} />
        <LabelSomething gap="5px" label="top" labelDirection="top" something={<Icon size="20px">{icon}</Icon>} />
        <LabelSomething gap="5px" label="bottom" labelDirection="bottom" something={<Icon size="20px">{icon}</Icon>} />
      </div>
    </div>
  );
};

export default LabelSomethingExample;

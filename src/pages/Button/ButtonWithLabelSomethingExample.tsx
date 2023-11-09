import { Button, LabelSomething, Icon } from '@swagfinger/components';
import { ThumbsUpIcon } from '@swagfinger/icons';

const ButtonWithLabelSomethingExample = () => {
  return (
    <Button
      intent="contained"
      className="bg-red-500 hover:bg-red-600 text-white"
      onClick={() => {
        console.log('hello world');
      }}>
      <LabelSomething
        gap="10px"
        label="right"
        labelDirection="right"
        something={
          <Icon size="20px" stroke="white">
            <ThumbsUpIcon />
          </Icon>
        }
      />
    </Button>
  );
};

export default ButtonWithLabelSomethingExample;

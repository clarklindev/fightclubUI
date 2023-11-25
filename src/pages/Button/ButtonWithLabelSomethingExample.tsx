import { Button, Label, Icon } from '@swagfinger/components';
import { ThumbsUpIcon } from '@swagfinger/icons';

const ButtonWithLabelSomethingExample = () => {
  return (
    <Button
      intent="contained"
      className="bg-red-500 hover:bg-red-600 text-white"
      onClick={() => {
        console.log('hello world');
      }}>
      <Label gap="10px" label="right" labelDirection="right">
        <Icon size="L" stroke="white">
          <ThumbsUpIcon />
        </Icon>
      </Label>
    </Button>
  );
};

export default ButtonWithLabelSomethingExample;

import { Button } from '@swagfinger/components';

const ButtonOutlinedExample = () => {
  return (
    <Button
      intent="outlined"
      onClick={() => {
        console.log('hello world');
      }}>
      Outlined
    </Button>
  );
};

export default ButtonOutlinedExample;

import { Button } from '@swagfinger/components';

const ButtonContainedExample = () => {
  return (
    <Button
      intent="contained"
      onClick={() => {
        console.log('hello world');
      }}>
      Contained
    </Button>
  );
};

export default ButtonContainedExample;

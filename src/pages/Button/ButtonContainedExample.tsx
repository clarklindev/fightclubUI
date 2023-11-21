import { Button } from '@swagfinger/components';

const ButtonContainedExample = () => {
  return (
    <Button
      onClick={() => {
        console.log('hello world');
      }}>
      Contained
    </Button>
  );
};

export default ButtonContainedExample;

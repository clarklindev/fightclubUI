import { Button } from '@swagfinger/components';

const ButtonTextExample = () => {
  return (
    <Button
      intent="text"
      onClick={() => {
        console.log('hello world');
      }}>
      Text
    </Button>
  );
};

export default ButtonTextExample;

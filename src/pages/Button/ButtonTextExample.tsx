import { Button } from '../../components';

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

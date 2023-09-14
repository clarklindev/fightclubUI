import { Button, Icon } from '../../components';
import { ShoppingCartIcon } from '../../icons';

const ButtonIconExample = () => {
  return (
    <Button
      intent="icon"
      onClick={() => {
        console.log('hello world');
      }}>
      <Icon size="25px">
        <ShoppingCartIcon />
      </Icon>
    </Button>
  );
};

export default ButtonIconExample;

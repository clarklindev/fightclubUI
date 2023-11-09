import { Button, Icon } from '@swagfinger/components';
import { ShoppingCartIcon } from '@swagfinger/icons';

const ButtonIconExample = () => {
  return (
    <Button
      intent="icon"
      onClick={() => {
        console.log('hello world');
      }}>
      <Icon size="20px">
        <ShoppingCartIcon />
      </Icon>
    </Button>
  );
};

export default ButtonIconExample;

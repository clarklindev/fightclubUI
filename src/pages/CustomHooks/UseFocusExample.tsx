import { useFocus } from '../../customhooks';
import { Button } from '../../components';

const UseFocusExample = () => {
  const [isFocused, attrs] = useFocus();

  return (
    <>
      <Button {...(attrs as React.HTMLAttributes<HTMLButtonElement>)}>Button</Button>
      {isFocused && <div className="absolute">hello world</div>}
    </>
  );
};

export default UseFocusExample;

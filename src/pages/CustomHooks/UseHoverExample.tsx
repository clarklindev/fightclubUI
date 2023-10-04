import { useHover } from '../../customhooks';
import { Button, Card } from '../../components';

const UseHoverExample = () => {
  const [hovering, attrs] = useHover();

  return (
    <div style={{ position: 'relative' }}>
      <Button {...(attrs as React.HTMLAttributes<HTMLButtonElement>)}>Button</Button>
    </div>
  );
};

export default UseHoverExample;

import { Icon, Heading, ResizePanel } from '../../components';
import { ShoppingCartIcon } from '../../icons';

const IconExample = () => {
  return (
    <>
      <Heading variation="h4">Icon</Heading>
      <ResizePanel>
        <Icon size="20px">
          <ShoppingCartIcon />
        </Icon>
      </ResizePanel>
    </>
  );
};

export default IconExample;

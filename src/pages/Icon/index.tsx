import { Icon, Heading, ResizePanel } from '@swagfinger/components';
import { ShoppingCartIcon } from '@swagfinger/icons';

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

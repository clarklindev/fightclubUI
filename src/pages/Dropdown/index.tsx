import { Dropdown, Heading } from '../../components';

const DropdownExample = () => {
  return (
    <>
      <Heading variation="h4">Dropdown</Heading>
      <Dropdown>
        <Dropdown.DropdownWrapper>
          <Dropdown.DropdownTrigger>hi</Dropdown.DropdownTrigger>
          <Dropdown.DropdownMenu>
            <Dropdown.DropdownMenuItem>click me</Dropdown.DropdownMenuItem>
          </Dropdown.DropdownMenu>
        </Dropdown.DropdownWrapper>
      </Dropdown>
    </>
  );
};

export default DropdownExample;

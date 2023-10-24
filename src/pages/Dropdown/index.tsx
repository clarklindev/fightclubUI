import { useState } from 'react';

import { Button, Dropdown, Heading } from '../../components';

const DropdownExample = () => {
  const [align, setAlign] = useState<string>('start');
  return (
    <>
      <Heading variation="h4">Dropdown</Heading>
      <Button
        onClick={() => {
          setAlign(prev => (prev === 'start' ? 'end' : 'start'));
        }}>
        toggle align
      </Button>
      <div style={{ height: '500px' }}></div>
      <Dropdown>
        <Dropdown.DropdownWrapper style={{ justifyContent: align }}>
          <Dropdown.DropdownTrigger>hi</Dropdown.DropdownTrigger>
          <Dropdown.DropdownMenu>
            <Dropdown.DropdownMenuItem>A</Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>B</Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>C</Dropdown.DropdownMenuItem>
          </Dropdown.DropdownMenu>
        </Dropdown.DropdownWrapper>
      </Dropdown>
      <div style={{ height: '500px' }}></div>
    </>
  );
};

export default DropdownExample;

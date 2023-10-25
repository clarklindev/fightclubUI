import { useState } from 'react';

import { Button, Dropdown, Heading } from '../../components';

const DropdownExample = () => {
  enum Position {
    Left = 'start',
    Center = 'center',
    Right = 'end',
  }

  const [align, setAlign] = useState<Position>(Position.Left);

  const iterateEnum = () => {
    const enumValues = Object.values(Position);
    const currentIndex = enumValues.indexOf(align);
    const nextIndex = (currentIndex + 1) % enumValues.length;
    setAlign(enumValues[nextIndex]);
  };

  return (
    <>
      <Heading variation="h4">Dropdown</Heading>
      <Button onClick={iterateEnum}>toggle align</Button>
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

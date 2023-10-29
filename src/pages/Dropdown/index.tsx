import { useState, useRef, useEffect } from 'react';

import { Button, Dropdown, Heading } from '../../components';
import { useDropdown } from '../../context/DropdownContext';
import { Position } from '../../utils/position';

const DropdownExample = () => {
  //temp code to get layout container: have to use useState because access to context is within Dropdown
  const tempWrapperRef = useRef<HTMLDivElement | null>(null);
  const [layoutContainer, setLayoutContainer] = useState<null | (HTMLElement | React.ReactNode)>(null);
  useEffect(() => {
    if (tempWrapperRef.current) {
      const container = (tempWrapperRef.current as HTMLElement).parentElement as HTMLElement;
      setLayoutContainer(container); //container not ref (might not have a ref)
    }
  }, [tempWrapperRef]);

  return (
    <div className="tempWrapper" ref={tempWrapperRef}>
      <Heading variation="h4">Dropdown</Heading>

      <Dropdown>
        <Dropdown.DropdownWrapper id="2" layoutContainer={layoutContainer} className="justify-start">
          <Dropdown.DropdownTrigger>hi</Dropdown.DropdownTrigger>
          <Dropdown.DropdownMenu className="w-40">
            <Dropdown.DropdownMenuItem>A</Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>B</Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>C</Dropdown.DropdownMenuItem>
            <Dropdown.DropdownMenuItem>D</Dropdown.DropdownMenuItem>
          </Dropdown.DropdownMenu>
        </Dropdown.DropdownWrapper>
      </Dropdown>
    </div>
  );
};

export default DropdownExample;

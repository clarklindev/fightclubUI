import React, { useState, useRef, useEffect } from 'react';

import { Dropdown, Heading, Tabs, CodeBlock } from '../../components';
import reactElementToJSXString from 'react-element-to-jsx-string';

const DropdownExample = () => {
  //temp code to get layout container: have to use useState because access to context is within Dropdown so not available yet
  const tempWrapperRef = useRef<HTMLDivElement | null>(null);
  const [layoutContainer, setLayoutContainer] = useState<null | (HTMLElement | React.ReactNode)>(null);
  useEffect(() => {
    if (tempWrapperRef.current) {
      const container = (tempWrapperRef.current as HTMLElement).parentElement as HTMLElement;
      setLayoutContainer(container); //container not ref (might not have a ref)
    }
  }, [tempWrapperRef]);

  const preview = (
    <Dropdown>
      <Dropdown.DropdownWrapper id="2" layoutContainer={layoutContainer}>
        <Dropdown.DropdownTrigger>hi</Dropdown.DropdownTrigger>
        <Dropdown.DropdownMenu className="w-40">
          <Dropdown.DropdownMenuItem>A</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>B</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>C</Dropdown.DropdownMenuItem>
          <Dropdown.DropdownMenuItem>D</Dropdown.DropdownMenuItem>
        </Dropdown.DropdownMenu>
      </Dropdown.DropdownWrapper>
    </Dropdown>
  );

  console.log('preview: ', preview);

  const previewString = reactElementToJSXString(preview, { showFunctions: true });
  console.log('previewString: ', previewString);

  const tabsData = [
    { label: 'preview', content: preview },
    {
      label: 'code',
      content: <CodeBlock>{`${previewString}`}</CodeBlock>,
    },
  ];

  return (
    <div className="tempWrapper" ref={tempWrapperRef}>
      <Heading variation="h4">Dropdown</Heading>

      <Tabs>
        <Tabs.TabWrapper data={tabsData}>
          <Tabs.TabHeaders />
          <Tabs.TabContent />
        </Tabs.TabWrapper>
      </Tabs>
    </div>
  );
};

export default DropdownExample;

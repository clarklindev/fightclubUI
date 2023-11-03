import React, { useState, useRef, useEffect } from 'react';

import { Heading, Tabs, CodeBlock } from '../../components';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownMenuItem, DropdownWrapper } from '../../components/Dropdown';
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
      <DropdownWrapper id="2" layoutContainer={layoutContainer}>
        <DropdownTrigger>hi</DropdownTrigger>
        <DropdownMenu className="w-40">
          <DropdownMenuItem>A</DropdownMenuItem>
          <DropdownMenuItem>B</DropdownMenuItem>
          <DropdownMenuItem>C</DropdownMenuItem>
          <DropdownMenuItem>D</DropdownMenuItem>
        </DropdownMenu>
      </DropdownWrapper>
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

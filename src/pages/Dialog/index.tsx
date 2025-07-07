import React from 'react';

import { useState } from 'react';

import { Dialog, CodeBlock, Heading, Tabs } from '@/components';
import Code from './code.mdx';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  const preview = (
    <>
      <div className="">
        <button className="bg-green-500 text-white px-6 py-3 rounded" onClick={toggleOpen}>
          Open
        </button>

        <Dialog isOpen={isOpen} onClose={toggleOpen} size="medium" />
      </div>
    </>
  );

  return (
    <div>
      <Heading as="h1" className="text-xl" data-observable="true">
        Dialog
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock>
              <Code />
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </div>
  );
};

export default DialogExample;

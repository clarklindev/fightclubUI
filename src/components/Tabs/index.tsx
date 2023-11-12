import React, { ReactNode, useRef, useEffect } from 'react';

import { Button } from '@swagfinger/components/Button';
import { TabsContextProvider, useTabs } from '@swagfinger/context/TabContext';

const Tabs = ({ children }: { children: React.ReactNode }) => {
  return <TabsContextProvider data-component="Tabs">{children}</TabsContextProvider>;
};

const TriggerGroup = ({ children, className }: { className?: string; children?: React.ReactNode }) => {
  const { setSelectedTabId } = useTabs();

  useEffect(() => {
    setSelectedTabId('0');
  }, []);

  return <div className={`flex flex-row gap-2 py-1 ${className}`}>{children}</div>;
};

type TriggerProps = {
  children?: string;
};

const Trigger = ({ children, ...rest }: TriggerProps) => {
  const { selectedTabId, setSelectedTabId } = useTabs();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dataTrigger = useRef<string>();

  useEffect(() => {
    // Accessing the data-trigger attribute using ref
    const id = triggerRef.current?.getAttribute('data-tab');
    if (id) {
      dataTrigger.current = id;
    }
  }, [triggerRef]);

  return (
    <Button
      intent="plain"
      padding="none"
      focus="none"
      className={selectedTabId === dataTrigger.current ? 'border-b-2 border-red-500' : 'border-b-2 border-transparent'}
      ref={triggerRef}
      onClick={e => {
        const clickedDataTrigger = e.currentTarget.dataset.tab;
        if (clickedDataTrigger) {
          setSelectedTabId(clickedDataTrigger);
        }
      }}
      {...rest}>
      {children}
    </Button>
  );
};

const Content = ({ children, ...rest }: { children?: React.ReactNode }) => {
  const { selectedTabId } = useTabs();

  const contentRef = useRef<HTMLDivElement | null>(null);
  const dataContent = useRef<string>();

  useEffect(() => {
    const id = contentRef.current?.getAttribute('data-tab');
    if (id) {
      dataContent.current = id;
    }
  }, [contentRef]);

  return (
    <div className={selectedTabId === dataContent.current ? 'block' : 'hidden'} ref={contentRef} {...rest}>
      {children}
    </div>
  );
};

Tabs.TriggerGroup = TriggerGroup;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export { Tabs };

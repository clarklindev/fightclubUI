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
TriggerGroup.displayName = 'Tabs.TriggerGroup';

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
      className={
        selectedTabId && selectedTabId === dataTrigger.current
          ? 'border-b-2 border-red-500'
          : 'border-b-2 border-transparent'
      }
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
Trigger.displayName = 'Tabs.Trigger';

const ContentGroup = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={['mt-5', `${className}`].join(' ')}>{children}</div>;
};
ContentGroup.displayName = 'Tabs.ContentGroup';

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
    <div
      className={[`${selectedTabId && selectedTabId === dataContent.current ? 'block' : 'hidden'}`].join(' ')}
      ref={contentRef}
      {...rest}>
      {children}
    </div>
  );
};
Content.displayName = 'Tabs.Content';

Tabs.TriggerGroup = TriggerGroup;
Tabs.Trigger = Trigger;
Tabs.ContentGroup = ContentGroup;
Tabs.Content = Content;

export { Tabs };

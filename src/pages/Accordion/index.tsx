import React from 'react';
import { Heading, Layout, Tabs, CodeBlock, Section, Accordion, Divider, Icon, Label } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { ChevronUpIcon, ChevronDownIcon, PlusIcon, MinusIcon } from '@swagfinger/icons';

const AccordionExample = () => {
  const data = [
    {
      title: 'helloworld',
      body: (
        <>
          {`this is my first answer`}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {`hi`}
        </>
      ),
    },
    {
      title: 'rainbow',
      body: 'rainbows are amazing',
    },
    {
      title: 'sun',
      body: 'the sun is amazing',
    },
  ];

  type AccordionDataType = {
    title: string;
    body: React.ReactElement | string;
  };

  const iconMap = {
    chevron: { open: <ChevronUpIcon />, closed: <ChevronDownIcon /> },
    plusminus: { open: <MinusIcon />, closed: <PlusIcon /> },
    hidden: {},
  };

  const preview = (
    <Accordion multiOpen={false}>
      {data.map(({ title, body }: AccordionDataType, index) => {
        return (
          <>
            <Accordion.Section key={index}>
              <Accordion.SectionHeader
                render={indexes => (
                  <Accordion.SectionHeaderTitle index={index}>
                    {title}
                    <Icon>{indexes.includes(index) ? iconMap['chevron'].open : iconMap['chevron'].closed}</Icon>
                  </Accordion.SectionHeaderTitle>
                )}
              />
              <Accordion.SectionPanel index={index}>
                <Accordion.SectionPanelContent>{body}</Accordion.SectionPanelContent>
              </Accordion.SectionPanel>
            </Accordion.Section>
            {/* <Divider /> add divider if needed */}
          </>
        );
      })}
    </Accordion>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <Section>
      <Heading variation="h1" data-observable="true">
        Accordion
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </Section>
  );
};
export default AccordionExample;

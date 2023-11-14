import { Table, Heading, ResizePanel, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

import type { Header } from '@swagfinger/components/Table';

const TableExample = () => {
  const configure = {
    padding: 'p-5',
    align: 'align-top',
  };

  const HEADERS: Array<Header> = [
    {
      title: 'year',
      mapToDataAttribute: 'year',
      width: '150fr',
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'artist',
      mapToDataAttribute: 'artist',
      width: '150fr',
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'song',
      mapToDataAttribute: 'song',
      width: '300fr',
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'amount ($)',
      mapToDataAttribute: 'amount',
      width: '100fr',
      alignHeader: 'right',
      alignContent: 'right',
    },
  ];

  const DATA = [
    {
      year: 2003,
      artist: 'Kanlam',
      song: 'Extended dynamic paradigm',
      amount: '4',
    },
    {
      year: 2003,
      artist: 'Subin',
      song: 'Focused even-keeled ability',
      amount: '14',
    },
    {
      year: 1999,
      artist: 'Alpha',
      song: 'Organic directional projection',
      amount: '30',
    },
  ];

  const preview = <Table headers={HEADERS} data={DATA} configure={configure} />;
  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Table
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
    </>
  );
};

export default TableExample;

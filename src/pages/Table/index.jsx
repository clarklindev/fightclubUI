import React from 'react';

import { Table, Heading } from 'swagfingerui';

const TableExample = () => {
  const configure = {
    padding: 'p-5',
  };
  const HEADERS = [
    {
      title: 'year',
      mapToDataAttribute: 'year',
      width: 150,
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'artist',
      mapToDataAttribute: 'artist',
      width: 150,
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'song',
      mapToDataAttribute: 'song',
      width: 300,
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'amount ($)',
      mapToDataAttribute: 'amount',
      width: 120,
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

  return (
    <>
      <Heading variation="h4">Table</Heading>
      <Table headers={HEADERS} data={DATA} configure={configure} />
    </>
  );
};

export default TableExample;

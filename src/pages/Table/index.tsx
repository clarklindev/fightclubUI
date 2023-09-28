import { Table, Heading, ResizePanel } from '../../components';
import type { Header } from '../../components/Table';

const TableExample = () => {
  const configure = {
    padding: 'p-5',
    align: 'align-top',
  };

  const HEADERS: Array<Header> = [
    {
      title: 'year',
      mapToDataAttribute: 'year',
      width: '150px',
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'artist',
      mapToDataAttribute: 'artist',
      width: '150px',
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'song',
      mapToDataAttribute: 'song',
      width: '300px',
      alignHeader: 'left',
      alignContent: 'left',
    },
    {
      title: 'amount ($)',
      mapToDataAttribute: 'amount',
      width: '120px',
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
      <ResizePanel>
        <Table headers={HEADERS} data={DATA} configure={configure} />
      </ResizePanel>
    </>
  );
};

export default TableExample;

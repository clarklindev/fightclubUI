import React from 'react';

type Align = 'left' | 'right' | 'center' | 'justify' | undefined;

export type Header = {
  width: string;
  alignHeader?: Align;
  alignContent?: Align;
  title: string;
  mapToDataAttribute: string;
};

export type TableProps = {
  headers: Array<Header>;
  data: Array<any>;
  configure: {
    padding: string;
    align: string; // vertical align of text
  };
};

const Table = ({ headers, data, configure }: TableProps) => {
  const columns = headers.map(each => each.width).join(' '); // Join widths for grid-template-columns
  console.log('columns: ', columns);

  return (
    <div className="overflow-x-auto w-full">
      <table className="border-collapse border border-gray-300 w-full" style={{ gridTemplateColumns: columns }}>
        <thead>
          <tr>
            {headers.map((header, headerindex) => (
              <th
                className={`border border-gray-300 p-${configure.padding} text-left p-4 align-top`} // Border for header cells
                key={headerindex}
                align={header['alignHeader']}
                title={header['title']}>
                {header['title']}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowindex) => (
            <tr key={rowindex}>
              {headers.map((header, index) => (
                <td
                  className={`border border-gray-300 ${configure.padding} ${configure.align} whitespace-nowrap overflow-hidden text-ellipsis`}
                  align={header['alignContent']}
                  key={index}
                  title={item[header['mapToDataAttribute']]}>
                  {item[header['mapToDataAttribute']]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.displayName = 'Table';
export { Table };

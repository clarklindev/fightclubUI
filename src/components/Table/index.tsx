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
    align: string; //vertical align of text
  };
};

export const Table: React.FC<TableProps> = ({ headers, data, configure }) => {
  return (
    <table className="border" style={{ overflowX: 'scroll' }}>
      <thead>
        <tr>
          {headers.map((header, headerindex) => {
            return (
              <th
                className={configure.padding}
                key={headerindex}
                style={{ width: header['width'], verticalAlign: 'top' }}
                align={header['alignHeader']}>
                {header['title']}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowindex) => {
          return (
            <tr key={rowindex}>
              {headers.map((header, index) => {
                return (
                  <td
                    className={[configure.padding, configure.align].join(' ')}
                    align={header['alignContent']}
                    key={index}>
                    {item[header['mapToDataAttribute']]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

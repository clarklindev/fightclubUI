import React from 'react';

type Header = {
  header: string;
  headerIndex: number;
  width: string;
  alignHeader: 'center' | 'left' | 'right' | 'justify' | 'char' | undefined;
  title: string;
};

type TableProps = {
  headers: Array<Header>;
  data: {
    item: any;
    rowIndex: number;
  };
  configure: {
    padding: string;
  };
};

export const Table: React.FC<TableProps> = ({ headers, data, configure }) => {
  return (
    <table className="border">
      <thead>
        <tr>
          {headers.map((header, headerindex) => {
            return (
              <th
                className={configure.padding}
                key={headerindex}
                style={{ width: header['width'] }}
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
              {headers.map((header, dataindex) => {
                return (
                  <td className={configure.padding} align={header['alignContent']} key={dataindex}>
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

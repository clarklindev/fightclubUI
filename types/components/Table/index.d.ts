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
export declare const Table: React.FC<TableProps>;
export {};
//# sourceMappingURL=index.d.ts.map
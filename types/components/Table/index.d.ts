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
    };
};
export declare const Table: React.FC<TableProps>;
export {};
//# sourceMappingURL=index.d.ts.map
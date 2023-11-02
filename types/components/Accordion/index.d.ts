import React from 'react';
export type AccordionDataType = {
    title: string;
    body: React.ReactElement | string;
};
type AccordionIconType = 'plusminus' | 'hidden' | 'chevron';
type AccordionProps = {
    data: Array<AccordionDataType>;
    multiOpen?: boolean;
    iconType?: AccordionIconType;
    showDivider?: boolean;
};
export declare const Accordion: React.FC<AccordionProps>;
export {};
//# sourceMappingURL=index.d.ts.map
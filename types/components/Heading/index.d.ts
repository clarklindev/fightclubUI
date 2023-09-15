import React from 'react';
declare enum HeadingVariation {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6"
}
type HeadingVariationType = keyof typeof HeadingVariation;
type HeadingProps = {
    variation: HeadingVariationType;
    children: string;
};
export declare const Heading: React.FC<HeadingProps>;
export {};
//# sourceMappingURL=index.d.ts.map
import React from 'react';
declare enum LayoutVariation {
    section = "section",
    block = "block"
}
type LayoutVariationType = keyof typeof LayoutVariation;
interface LayoutProps {
    variation: LayoutVariationType;
    label?: string;
    children?: React.ReactNode;
}
export declare const Layout: React.FC<LayoutProps>;
export {};
//# sourceMappingURL=index.d.ts.map
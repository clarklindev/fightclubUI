import React from 'react';
type LayoutVariationType = keyof typeof LayoutVariation;
type LayoutProps = {
    variation: LayoutVariationType;
    label?: string;
    children?: React.ReactNode;
};
export declare const Layout: React.FC<LayoutProps>;
declare enum LayoutVariation {
    section = "section",
    block = "block"
}
export {};
//# sourceMappingURL=index.d.ts.map
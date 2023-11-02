import React from 'react';
import { ThemeType } from '../../themes/LightTheme';
declare enum HeadingVariation {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6"
}
type HeadingProps = {
    variation: HeadingVariationType;
    size?: string;
    children: string;
};
type HeadingVariationType = keyof typeof HeadingVariation;
export declare const Heading: React.FC<HeadingProps>;
export declare const H1: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string;
}, never>;
export declare const H2: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string;
}, never>;
export declare const H3: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string;
}, never>;
export declare const H4: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string;
}, never>;
export declare const H5: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string;
}, never>;
export declare const H6: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string;
}, never>;
export {};
//# sourceMappingURL=index.d.ts.map
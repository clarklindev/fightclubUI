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
declare enum HeadingSize {
    XXXL = "1.383rem",
    level1 = "1.383rem",
    XXL = "1.296rem",
    level2 = "1.296rem",
    XL = "1.215rem",
    level3 = "1.215rem",
    L = "1.138rem",
    level4 = "1.138rem",
    M = "1.067rem",
    level5 = "1.067rem",
    S = "1rem",
    level6 = "1rem",
    XS = "0.937rem",
    level7 = "0.937rem",
    XXS = "0.878rem",
    level8 = "0.878rem",
    XXXS = "0.823rem",
    level9 = "0.823rem"
}
export type HeadingProps = {
    variation: HeadingVariationType;
    size?: keyof typeof HeadingSize | undefined;
    className?: string;
    children: string;
};
type HeadingVariationType = keyof typeof HeadingVariation;
export declare const Heading: React.FC<HeadingProps>;
export declare const H1: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string | undefined;
}, never>;
export declare const H2: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string | undefined;
}, never>;
export declare const H3: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string | undefined;
}, never>;
export declare const H4: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string | undefined;
}, never>;
export declare const H5: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string | undefined;
}, never>;
export declare const H6: import("styled-components").StyledComponent<"div", any, {
    theme: ThemeType;
} & {
    theme: ThemeType;
    size: string | undefined;
}, never>;
export {};
//# sourceMappingURL=index.d.ts.map
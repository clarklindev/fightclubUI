/// <reference types="react" />
import { HeadingProps } from '@swagfinger/components';
type NavSideProps = {
    children?: React.ReactNode;
    className?: string;
};
declare const NavSide: {
    ({ children, className }: NavSideProps): import("react/jsx-runtime").JSX.Element;
    Heading: ({ variation, children, ...rest }: HeadingProps) => import("react/jsx-runtime").JSX.Element;
    Link: ({ children, to }: {
        children: React.ReactNode;
        to: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Group: ({ children, className }: {
        className?: string | undefined;
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
export { NavSide };
//# sourceMappingURL=index.d.ts.map